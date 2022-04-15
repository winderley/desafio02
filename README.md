# desafio02

A seguir serão descritas as etapas e o funcionamento da aplicação para aender o desafio 02 do curso Full Cycle 3.0.

DESCRIÇÃO DA APLICAÇÃO:

Comando GET no endereço localhost:8080 faz um link com um dos 2 containeires rodando aplicação node js (APP e APP2) que acessam o banco Mysql, trazendo a lista de usuários cadastrados na tabela people.

Na apesentação do resultado são exibidos a mensagem "Full Cycle !!" e a informação do aplicação node js utilizada "APP 1111" ou "APP 2222", conforme são acessados os containeres app e app2 e a lista de usuários cadastrados na tabela people (não foi realizada a formatação das mensagens de saída ou tratamento dos dados, por entender que não fazia parte do desafio).

O cadastro de um novo usuario pode ser realizado por meio de "POST" no endereço localhost:8080,  em formato JSON,
name e email. ex:

            POST  http://localhost:8080/
            content-type: application/json

            {
              "name" : "teste desafio-02 55555555",
              "email" : "55555555@teste.com"
            }


Para testar a inclusão de usuário e a consulta à tabela people e ainda,o acesso ao NGINX, foram criados os arquivos GET_app.http, POST_app.http e GET_nginx.http (funcionam com a extensão "REST Client" no Vscode).

O diretório scripts_sql possui 2 arquivos com comandos SQL para criação da tabela people e inclusão de um  usário.

CONTAINERES:

  01 - Container rodando NGINX (porta 8080);
  01 - Container rodando Mysql com banco de dados nodedb e tabela people;
  02 - Containeres rodando aplicação node js (APP e APP2), com acesso a leitura e escrita no banco Mysql.

INSTALAÇÂO

Clonar o repositório e executar o comando "docker-compose up"
