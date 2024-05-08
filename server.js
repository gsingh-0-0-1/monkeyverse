const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const fs = require('fs')
const socketIO = require('socket.io');


const PORT = 3000;
const HOST = "localhost"

const app = express();
const server = http.createServer(app);

server.listen(PORT, HOST, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
 	res.send('Hello world!');
});

function responseTest(req, res) {
	res.send("test")
}

app.get('/test', responseTest);

