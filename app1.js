var http = require("http");

http.createServer(function (requisicao, resposta){
    resposta.end("<h1>Olá, Mundo!</h1>");
}).listen(8181);

console.log("Servidor rodando na porta 8181");