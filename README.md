# Projeto Interdisciplinar III - Sistemas de Informação ESPM

<p align="center">
    <a href="https://www.espm.br/cursos-de-graduacao/sistemas-de-informacao/"><img src="https://raw.githubusercontent.com/tech-espm/misc-template/main/logo.png" alt="Sistemas de Informação ESPM" style="width: 375px;"/></a>
</p>

# EMGODS

### 2024-02

## Integrantes
- [Henrique Lecce](https://github.com/HSLPines/)
- [João Helbel](https://github.com/joaohelbel/)
- [Márcio Alexandroni](https://github.com/marcio-alexandroni/)
- [Paulo Cesar](https://github.com/impauloc/)

## Descrição do Projeto

- O projeto EMGODS combina hardware, software e ciência de dados para criar um sistema integrado que monitora a contração muscular usando um sensor eletromiográfico (EMG). Utilizamos um Arduino Uno e um sensor EMG para capturar sinais musculares, que são então enviados para uma aplicação web desenvolvida com Spring Boot, EJS, HTML, CSS e Redis. Esses dados são processados, armazenados em um banco MySQL e exibidos como gráficos interativos, permitindo análise da performance muscular e suporte a reabilitação física.

### Problema

- A reabilitação física e o monitoramento muscular frequentemente carecem de ferramentas acessíveis e interativas para capturar e analisar padrões musculares em tempo real. Nosso objetivo é fornecer um sistema que facilite a coleta, o processamento e a interpretação desses dados, promovendo melhorias na saúde e recuperação muscular.

### Objetivo Final

- Desenvolver um sistema integrado que:

- Colete sinais eletromiográficos de forma precisa.
- Envie os dados para um servidor web utilizando Arduino e Redis.
- Armazene os dados em um banco MySQL estruturado para análise posterior.
- Disponibilize gráficos interativos para análise visual na aplicação web.
- Identifique padrões musculares com foco em reabilitação e saúde.

### Tecnologias Utilizadas
- Hardware: Arduino Uno, Sensor EMG.
- Frontend: HTML, CSS, EJS.
- Backend: Spring Boot, Java.
- Banco de Dados: MySQL.
- Cache: Redis.
- Virtualização: Docker.
- Linguagens: Java, C++.


# Detalhes de Configuração

Para funcionar corretamente, devem ser criados os seguintes arquivos/pastas nos caminhos especificados, com o conteúdo especificado:

- O arquivo `.env` deve ser criado em `/`, com o conteúdo abaixo:
```
mysqlhost=localhost
mysqlport=3306
mysqluser=[USUÁRIO DO BANCO]
mysqlpassword=[SENHA DO USUÁRIO DO BANCO]
mysqldatabase=[NOME DO BANCO]
```

- A pasta `local` deve ser criada em `/public/img`

# Licença

Este projeto é licenciado sob a [MIT License](https://github.com/tech-espm/inter-3sem-2024-emg-sensor/blob/main/LICENSE).

<p align="right">
    <a href="https://www.espm.br/cursos-de-graduacao/sistemas-de-informacao/"><img src="https://raw.githubusercontent.com/tech-espm/misc-template/main/logo-si-512.png" alt="Sistemas de Informação ESPM" style="width: 375px;"/></a>
</p>
