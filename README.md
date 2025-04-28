# O Projeto

O projeto se trata de uma simples aplicação de cadastro de alunos.
Feito em Java com o framework Spring, conctado a uma Database MondoDB e complementado por um Frontend feito em React.js.


## Backend:
A aplicação em Java é a API que verdaddeiramente tem contato com a Database.
Feita em Spring/Java 17.
- Portando as dependências:
    - Lombok
    - Spring
    - MongoDb
    - Swagger

### Requsitos: 

- Java 17 (ou superior) instalado.
- Maven.
- Ports 8081, 27017 & 3000 abertos.
- MongoDB instaldo e uma conexão estabelecida no port 27017.

### Setup: 

- Inicie a conexão com o MongoDB
- Abra o Backend em uma IDE e recarregue as dependências do Maven.
- É possível se testar os endpoints pelo Swagger pelo endpoint: http://localhost:8081/apiDocs

E a API deve estar no ar.
##

## Frontend
Também uma aplicação bem simples, mas em React.js que é capaz de realizar "requests" para os enpoints do Backend.

### Requsitos: 

- NODE.js  v22.14.0. (ou superior) instalado.
- Algum Browser instalado.

### Setup: 

- Execute o comando "npm install" - pra baixar a as dependências necessárias.
- Então o comando "npm start" - para iniciar a aplicação.

E o setup está completo
-



# Configurações Extras:
Caso necessite alter as portas utilizadas pelo projeto use esta tabela de comparação:

| Port          |Local no Backend                 | Local no Frontend | 
|---------------|---------------------------------|-------------------|
| 8081          | resorces/application.properties | src/App.js        |
| 3000          | ---                             | .env              | 
| 27017         | resorces/application.properties | ---               |

- Deve-se criar uma outra conexão no MongoDB caso tenha alterado o port da mesma no application.properties.
