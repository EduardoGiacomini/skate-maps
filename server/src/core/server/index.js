const express = require('express');
const { RouterFactory } = require('./router');

class Server {
    constructor() {
        this.app = express();
        this.__apply_middlewares()
    }

    start(connection) {
        this.connection = connection;

        const PORT = process.env.PORT || 8000;
        this.app.listen(PORT, () => {
            console.log(`🚀  Server listening on port ${PORT}`)
        });
    }

    __apply_middlewares() {
        this.app.use(express.json());
        this.app.use(RouterFactory.createRouter());
    }
}

class ServerFactory {
    static createServer() {
        return new Server;
    }
}

module.exports = { Server, ServerFactory };
