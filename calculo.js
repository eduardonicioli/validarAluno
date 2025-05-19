// calculo.js

function calcularMedia(nota1, nota2) {
    // Converte valores para número e verifica se são válidos
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);

    // Verifica se os valores convertidos são NaN
    if (isNaN(n1) || isNaN(n2)) return NaN;

    // Verifica se estão dentro do intervalo permitido
    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) return null;

    return (n1 + n2) / 2;
}

function determinarSituacao(media) {
    if (media === null || media === undefined) return "Erro";
    if (media < 5) return "Reprovado";
    if (media < 7) return "Recuperação";
    return "Aprovado";
}

module.exports = {
    calcularMedia,
    determinarSituacao
};