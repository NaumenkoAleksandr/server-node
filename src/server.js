const net = require('node:net');

const PORT = 8080;

const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        console.log(`Received: ${data}`);
        socket.write(data); // Echo back the received data
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.on('error', (err) => {
    throw err;
  });

server.listen(PORT, () => {
    console.log(`TCP Echo Server is running on port ${PORT}`);
});