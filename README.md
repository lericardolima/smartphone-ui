# Smartphone UI
[![Build Status](https://travis-ci.com/lericardolima/smartphone-ui.svg?branch=develop)](https://travis-ci.com/lericardolima/smartphone-ui)

Interface do usuário criada para o projeto Smartphone, um sistema para venda de smartphones.

---
### Ferramentas

*  [npm](https://www.npmjs.com/)
*  [Angular 9](https://angular.io/)
*  [TypeScript](https://www.typescriptlang.org/)
*  [Angular Material](https://material.angular.io/)
*  [Angular Flex-Layout](https://github.com/angular/flex-layout)
*  [RxJS](https://rxjs-dev.firebaseapp.com/)
*  [Karma](https://karma-runner.github.io/latest/index.html/)
*  [Node.js](https://nodejs.org/en/)
*  [Express](https://expressjs.com/pt-br/)
*  [http-proxy](https://www.npmjs.com/package/http-proxy)
*  [dotenv](https://www.npmjs.com/package/dotenv)
---
### Configuração do ambiente

Siga as instruções para configurar o ambiente de desenvolvimento.

#### Instalar dependencias

  Execute o comando abaixo para instalar as dependencias do projeto.
  ```
  npm install
  ``` 

#### Iniciar o Smartphone API

  Antes de executar o projeto, certifique-se de que o Smartphone API esteja sendo executado e acessível. No arquivo `proxy.config.json`, altere o atributo `target` com o endereço do servidor da API.
  ```
  {
    "/api/*": {
        "target": "http://localhost:8080",
        "secure": false,
        "logLevel": "debug"
    }
  }
  ```

  Na raiz do projeto, execute o comando:
  ```
  ng serve --open
  ```

  Após o fim da execução do comando, acesso o Smartphone UI em [http://localhost:4200](http://localhost:4200).
 
#### Executar os testes

  Na raiz do projeto, execute o comando:
  ```
  ng test
  ```
 
#### Lint

  Na raiz do projeto, execute o comando:
  ```
  ng lint smartphone-ui
  ```
  
#### Gerar build

  Na raiz do projeto, execute o comando:
  ```
  ng build --prod
  ```
  Este comando deve gerar os arquivos compilados na pasta `server/dist/static`.

#### Executar servidor de produção

  Após o build, entre na pasta `server` e crie o arquivo `.env` com os parâmetros:
  ```
  API_SERVER_BASE_URL=http://localhost:8080
PORT=4200
  ```
  O parâmetro `API_SERVER_BASE_URL` é obrigatório e seu valor é o link para onde o servidor da API está sendo executado.
  O parâmetro `PORT` é opcional, seu valor default é 3000.

  Em seguida, na pasta `server`, execute os comandos:
  ```
  npm install
  npm start
  ```
  Após o fim da execução do comando, acesso o Smartphone UI em [http://localhost:4200](http://localhost:4200).

  ## Contribuição
  
   **Ricardo de Lima Rocha**
  *  [Linkedin](https://www.linkedin.com/in/ricardo-de-lima-rocha/)
  *  [GitHub](https://github.com/lericardolima)
