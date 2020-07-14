const knex = require('knex');

class Database {
    constructor(config) {
        this.connection = null;
        this.config = config;
    }

    connect() {
        this.connection = knex(this.config);
        console.log('✅  Banco de dados conectado.');
    }

    disconnect() {
        this.connection.destroy();
    }

    getConnection() {
        return this.connection;
    }
}

class DatabaseFactory {
    static createDatabase(config) {
        return new Database(config);
    }
}

module.exports = { Database, DatabaseFactory };
