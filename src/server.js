const net = require('node:net');

const PORT = 8080;

class TCPServer {
    constructor(port = PORT) {
        this.port = port;
        this.server = net.createServer(this.setupServer);

        this.server.on('error', (err) => {
            throw err;
          });
    }

    setupServer = (socket) => {
        console.log('Client connected');
    
        socket.on('data', this.handleRequest(socket));
    
        socket.on('end', () => {
            console.log('Client disconnected');
        });
    }

    start = () => {
        this.server.listen(this.port, () => {
            console.log(`TCP Echo Server is running on port ${this.port}`);
        });
    }

    stop = () => {
        this.server.close(() => {
            console.log('TCP Echo Server is closed');
        });
    }

    handleRequest = (socket) => {
        return (data) => {
            console.log(`Received: ${data}`);
            socket.write(data); // Echo back the received data
        }
    }
}

module.exports = TCPServer;
