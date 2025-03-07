# TCP Echo Server

This project implements a simple TCP echo server using Node.js. The server listens for incoming TCP connections and echoes back any data received from clients.

## Project Structure

```
ServerNode
├── src
│   ├── server.js       # Entry point of the TCP echo server
├── package.json        # Configuration file for npm
└── README.md           # Documentation for the project
```

## Getting Started

To get started with the TCP echo server, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd ServerNode
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

## Usage

Once the server is running, you can connect to it using a TCP client (like `telnet` or `netcat`). Any data sent to the server will be echoed back.

## License

This project is licensed under the MIT License.