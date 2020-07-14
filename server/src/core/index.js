class Core {
    constructor(database, server) {
        this.database = database;
        this.server = server;
    }

    start() {
        this.database.connect();
        const connection = this.database.getConnection();
        this.server.start(connection);
    }

    stop() {
        this.database.disconnect();
    }
}

class CoreFactory {
    static createCore(database, server) {
        return new Core(database, server);
    }
}

module.exports = { CoreFactory, Core };
