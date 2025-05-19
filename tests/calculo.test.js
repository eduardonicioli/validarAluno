const { calcularMedia, determinarSituacao } = require('../calculo');

describe('calcularMedia', () => {
    test('deve calcular a média corretamente', () => {
        expect(calcularMedia(8, 6)).toBe(7);
        expect(calcularMedia(7.5, 8.5)).toBe(8);
    });

    test('deve retornar NaN se algum valor não for número', () => {
        expect(calcularMedia('a', 5)).toBeNaN();
        expect(calcularMedia(7, null)).toBeNaN();
        expect(calcularMedia(undefined, 10)).toBeNaN();
    });

    test('deve retornar null se notas fora do intervalo 0-10', () => {
        expect(calcularMedia(11, 5)).toBeNull();
        expect(calcularMedia(9, -2)).toBeNull();
        expect(calcularMedia(10.1, 9)).toBeNull();
    });
});

describe('determinarSituacao', () => {
    test('deve retornar "Erro" se a média for null ou undefined', () => {
        expect(determinarSituacao(null)).toBe("Erro");
        expect(determinarSituacao(undefined)).toBe("Erro");
    });

    test('deve retornar "Reprovado" se média menor que 5', () => {
        expect(determinarSituacao(4.9)).toBe("Reprovado");
        expect(determinarSituacao(0)).toBe("Reprovado");
    });

    test('deve retornar "Recuperação" se média entre 5 e 7', () => {
        expect(determinarSituacao(5)).toBe("Recuperação");
        expect(determinarSituacao(6.9)).toBe("Recuperação");
    });

    test('deve retornar "Aprovado" se média maior ou igual a 7', () => {
        expect(determinarSituacao(7)).toBe("Aprovado");
        expect(determinarSituacao(10)).toBe("Aprovado");
    });
});