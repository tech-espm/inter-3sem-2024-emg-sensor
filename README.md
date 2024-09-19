# Projeto Interdisciplinar III - Sistemas de Informação ESPM

<p style="text-align: center;">
    <a href="https://www.espm.br/cursos-de-graduacao/sistemas-de-informacao/"><img src="https://avatars.githubusercontent.com/u/49880458?s=200&v=4" alt="Sistemas de Informação ESPM" style="height: 200px; width: 200px;"/></a>
</p>

# EMGODS

### 2024-02

## Integrantes
- [Henrique Lecce](https://github.com/HSLPines/)
- [João Helebel](https://github.com/joaohelbel/)
- [Márcio Alexandroni](https://github.com/marcio-alexandroni/)
- [Paulo César](https://github.com/impauloc/)

## Descrição do Projeto

- Realizaçar um projeto com o Arduino no qual, usaremos o sensor E.M.G. (eletromiográfico) para medir a contração muscular do usuário do nosso sistema. O projeto engloba também a criação de um programa web para disponibilizar gráficos dos dados coletados pela equipe. Tais dados e gráficos poderão ser usados para análisar performance física e uso correto de grupos muscúlares para pacientes de recuperação física e habilidades motoras.

### Problema

- 

### Objetivo Final

- O grupo visa desenvolver no projeto um sistema integrado para coletar sinais eletromiográficos utilizando um sensor EMG acoplado ao Arduino, e enviar os dados para uma aplicação web construída com Spring Boot. Esses sinais serão processados e analisados para identificar padrões musculares, com foco em saúde e reabilitação muscular.


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

Este projeto é licenciado sob a [MIT License](https://github.com/tech-espm/inter-2sem-2024-easy-trash/blob/main/LICENSE).
