const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url;
    if (url === '/') {
        res.setHeader('content-type', 'text/html');
        res.write('<html>');
        res.write('<head>My first page</head>');
        res.write('<body><form action="/message" method="POST" name="message"><input type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();

    }
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<head>My first page</head>');
    res.write('<body><h1>Neha is the best!</h1></body>');
    res.write('</html>');
    res.end();


});

server.listen(3000)