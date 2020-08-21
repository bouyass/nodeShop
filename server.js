const http = require('http');
const app = require('./express')

const server = http.createServer();

server.listen(process.env.POSRT || 3000)