const Core = require('../../src/core');

describe('Quando o módulo principal é importado', () => {
    test('Deve possuir os métodos #start e #stop', () => {
        const core = new Core();

        expect(core).toHaveProperty('start');
        expect(core).toHaveProperty('stop');
    });
});

describe('Quando o módulo principal é iniciado', () => {
    test('Deve iniciar sem erros', () => {
        const core = new Core();

        expect(() => {
            core.start();
        }).not.toThrow();
    });

    test('Deve encerrar sem erros', () => {
        const core = new Core();

        expect(() => {
            core.stop();
        }).not.toThrow();
    });
});
