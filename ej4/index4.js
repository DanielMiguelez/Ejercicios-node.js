const http = require("http");
const fs = require('fs');
const url = require('url');


http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const fillname = "./pages" + q.pathname + ".html";
    fs.readFile(fillname, (err, data) => {
      try {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      } catch (error) {
        fs.readFile("./pages/notFound.html", (err, data) => {
        res.writeHead(404, { "Content-Type": "text/html" });
        console.error(error);
        res.write(data)
        return res.end();
      })}
    });
  }).listen(8080);