const express = require('express');

class Router {
    constructor(connection) {
        this.routes = express.Router();
        this.connection = connection;
        this.__apply_routes();
    }

    getRoutes() {
        return this.routes;
    }

    __apply_routes() {
        this.routes.get('/api/v1/test', (req, res) => res.send({ "ok": true }));
        this.routes.get('/api/v1/users', async (req, res) => {
            users = await this.connection.select().from('users');
            res.send(users);
        });
    }
}

class RouterFactory {
    static createRouter(connection) {
        return new Router(connection).getRoutes();
    }
}

module.exports = { Router, RouterFactory };
