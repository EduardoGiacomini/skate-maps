const Core = require('../src/core');
const ServerMock = require('./mocks/server.mock');

describe('Quando o módulo principal é criado', () => {
    const server = new ServerMock();
    const core = new Core(server);

    test('Deve iniciar sem erros', () => {
        expect(() => {
            core.start();
        }).not.toThrow();
    });

    test('Deve encerrar sem erros', () => {
        expect(() => {
            core.stop();
        }).not.toThrow();
    });
});
