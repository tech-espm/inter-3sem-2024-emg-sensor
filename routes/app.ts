import axios from "axios";
import { SerialPort } from "serialport";

const portaCOM = "COM13";
const urlPost = "http://localhost:3000/api/leitura";

// https://serialport.io/docs/api-stream/
// https://axios-http.com/docs/post_example

let abrindo = false;
let porta: SerialPort | null = null;

function fecharPorta(porta: SerialPort | null): Promise<void> {
	if (!porta)
		return Promise.resolve();

	return new Promise((resolve) => {
		try {
			if (!porta) {
				resolve();
				return;
			}

			porta.close((error) => {
				resolve();
			});
		} catch (ex: any) {
			resolve();
		}
	});
}

function limparPorta(porta: SerialPort | null): Promise<void> {
	if (!porta)
		return Promise.resolve();

	return new Promise((resolve) => {
		if (!porta) {
			resolve();
			return;
		}
		porta.flush(() => {
			resolve();
		});
	});
}

function criarPorta(path: string, baudRate: number): Promise<void> {
	abrindo = true;
	console.log("abrindo porta...");

	return new Promise((resolve, reject) => {
		let objetoAberto = false;
		let dadosValidos = 0;
		let dados = Buffer.alloc(2048);

		try {
			const portaLocal = new SerialPort({
				path,
				autoOpen: true,
				baudRate: 115200,
				dataBits: 8,
				endOnClose: false,
				lock: true,
				parity: "none",
				rtscts: false,
				stopBits: 1,
				xany: false,
				xoff: false,
				xon: false,
			});

			portaLocal.on("open", async () => {
				if (porta)
					return;

				abrindo = false;

				console.log("open");

				await limparPorta(portaLocal);

				porta = portaLocal;

				resolve();
			});

			portaLocal.on("close", async () => {
				console.log("close");

				await limparPorta(portaLocal);
				await fecharPorta(portaLocal);

				if (porta === portaLocal)
					porta = null;
			});

			portaLocal.on("error", async (error) => {
				abrindo = false;

				console.log("error: " + JSON.stringify(error));

				await limparPorta(portaLocal);
				await fecharPorta(portaLocal);

				if (porta === portaLocal)
					porta = null;
			});

			portaLocal.on("data", (chunk: Buffer) => {
				if (!porta || porta !== portaLocal)
					return;

				for (let i = 0; i < chunk.byteLength; i++) {
					const c = chunk[i];
					switch (c) {
						case 0x7b: // {
							objetoAberto = true;
							dadosValidos = 1;
							dados[0] = c;
							break;

						case 0x7d: // }
							if (dadosValidos < dados.byteLength) {
								if (objetoAberto) {
									dados[dadosValidos] = c;
									dadosValidos++;
									try {
										const json = dados.toString("utf8", 0, dadosValidos);
										try {
											const obj = JSON.parse(json);
											console.log(json);
											portaLocal.pause();
											axios.post(urlPost, obj).then((response) => {
												console.log("post OK");
												if (porta && porta === portaLocal)
													portaLocal.resume();
											}, (error) => {
												console.log("erro de post: " + error);
												if (porta && porta === portaLocal)
													portaLocal.resume();
											});
										} catch (ex: any) {
											console.log("erro ao converter a string para JSON: " + ex.message);
										}
									} catch (ex: any) {
										console.log("erro ao gerar a string: " + ex.message);
									}
								}
							}
							objetoAberto = false;
							dadosValidos = 0;
							break;

						default:
							if (dadosValidos < dados.byteLength) {
								dados[dadosValidos] = c;
								dadosValidos++;
							}
							break;
					}
				}
			});
		} catch (ex: any) {
			console.log("exceção: " + ex.message);
			reject(ex);
		}
	});
}

setInterval(() => {
	if (!abrindo && !porta)
		criarPorta(portaCOM, 115200);
}, 1000);
