void setup() {
// put your setup code here, to run once:
Serial.begin(115200);
}

void loop() {
// put your main code here, to run repeatedly:
long horaInicial = millis();
long soma = 0;
int leituras = 0;
while ((millis() - horaInicial) < 20) {
soma += analogRead(A0);
leituras++;
}
Serial.println(soma / leituras);
}
