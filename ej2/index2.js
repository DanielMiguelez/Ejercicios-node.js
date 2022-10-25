const http = require("http");
const Logger = require('logplease');
const logger = Logger.create('utils');

logger.debug(`Hola Mundo de Node`);
logger.info(`This is a info message`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!!`);


    http.createServer((req, res) =>{
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Aprendiendo en The Bridge!");
})
.listen(8080);