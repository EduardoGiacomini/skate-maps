const express = require('express');

const pool = require('./database/PoolFactory');
const connectionMiddleware = require('./middlewares/connectionMiddleware');

const routes = require('./routes');

const DEFAULT_PORT_SERVER = 8000;

class Server {
    constructor() {
        this._express = express();
        this._port = process.env.SERVER_PORT || DEFAULT_PORT_SERVER;

        this._apply_middleware();
    }

    _apply_middleware() {
        this._express.use(express.json());
        this._express.use(connectionMiddleware(pool));
        this._express.use(routes);
    }

    start() {
        this._express.listen(this._port, () => {
           console.log(`Server started on port ${this._port}`);
        });
    }
}

const server = new Server();

module.exports = server;
