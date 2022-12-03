/* Criação de um servidor danki code*/
const http = require('http');
const fs = require('fs');  // fs permite que manipule arquivos no servidor node

const hostname = '127.0.0.1';
const port = 3000;

/*const server = http.createServer((req, res) => {
    
    res.statusCode = 200;  // res é a resposta que está dando para o servidor
    res.setHeader("Content-Type", "text/plain");

    res.end('Hello Mário');
})*/

// Criando servidor
const server = http.createServer((req, res) => {
    // essa função ira servir um arquivo html para o servidor
    //console.log(req)  // vai mostrar toda a requisição so servidor no console
    if (req.url == '/mario') {  // valida se a url está correta
        fs.readFile("index.html", function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
        });
    } else {
        return res.end()  // sem a finalização da pagina, fica carregando infinitamente
    }
    //console.log(req.headers); // mostra a requisição do header


});

// função para acessar o servidor
server.listen(port, hostname, () => {
    console.log('Servidor Ok')
});

// Lendo arquivos com base url