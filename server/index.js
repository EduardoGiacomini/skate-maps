require('dotenv').config();
const server = require('./src/server');

try {
    server.start();
} catch (error) {
    console.error('Exceção inesperada: ', error);
}
