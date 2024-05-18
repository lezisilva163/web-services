# APP 

Este projeto é uma API RESTful construída com Node.js e Fastify, que contém quatro rotas GET. Cada uma dessas rotas realiza consultas em uma base de dados MongoDB para buscar e retornar informações específicas.

# Tecnologias utilizadas

- **🟢 Node.js**: Ambiente de execução para JavaScript.
- **⚡ Fastify**: Framework web para Node.js focado em performance.
- **📦 MongoDB**: Banco de dados não relacional robusto e eficiente.

# Instalação

- Para configurar e executar o projeto localmente, siga os passos abaixo:

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/web-services.git 
   ```
2. Instale as dependências:
    ```bash
    npm install
    ```

## RFs (Requisitos funcionais)

- [ ] O MongoDB deve ter duas collections, a primeira deve conter apenas usuários (nome, idade) e a segunda conter posts (título, id do usuário);

## RNs (Regras de negócio)

- [ ] Um usuário pode ter mais de um post;

## RNFs (Requisitos não-funcionais)

- [ ] A lógica do MongoDB deve estar separado, para que possa contar quantos milisegundos dura a requisição.