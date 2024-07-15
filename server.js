const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request ...')
    res.setHeader('content - Type, 'text/html');
    res.end();    

})

server.listen(3000, 'localhost', () => {
    console.log('Node.JS server is running on port: 3000')
})