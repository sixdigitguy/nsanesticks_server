const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const playerRoutes = require('./routes/playerRoutes');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.json());
app.use('/api/players', playerRoutes);

wss.on('connection', (ws) => {
  console.log('New client connected');
  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);
    // Handle incoming messages
    // Parse the message and forward it to the appropriate handler
  });
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
