const { CoreFactory } = require('./src/core');
const { DatabaseFactory } = require('./src/core/database');
const { ServerFactory } = require('./src/core/server');
const databaseConfig = require('./knexfile');

try {
    const database = DatabaseFactory.createDatabase(databaseConfig.development);
    const server = ServerFactory.createServer();
    const application = CoreFactory.createCore(database, server);
    application.start();
} catch (error) {
    console.error('😓  Exceção inesperada: \n', error);
}
