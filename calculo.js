// calculo.js

function calcularMedia(nota1, nota2) {
    if (isNaN(nota1) || isNaN(nota2)) return NaN;
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) return null;

    return (nota1 + nota2) / 2;
}

function determinarSituacao(media) {
    if (media === null || media === undefined) return "Erro";
    if (media < 5) return "Reprovado";
    if (media < 7) return "Recuperação";
    return "Aprovado";
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const resultDiv = document.createElement("div");

    resultDiv.id = "resultado";
    resultDiv.style.marginTop = "2rem";
    resultDiv.style.padding = "1rem";
    resultDiv.style.borderRadius = "8px";
    resultDiv.style.fontSize = "1.1rem";
    resultDiv.style.textAlign = "center";
    resultDiv.style.maxWidth = "500px";
    resultDiv.style.marginLeft = "auto";
    resultDiv.style.marginRight = "auto";

    form.parentNode.appendChild(resultDiv);

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const nota1 = parseFloat(document.getElementById("nota1").value);
        const nota2 = parseFloat(document.getElementById("nota2").value);

        const media = calcularMedia(nota1, nota2);

        if (isNaN(media)) {
            exibirErro("Por favor, insira valores numéricos válidos.");
            return;
        }

        if (media === null) {
            exibirErro("As notas devem estar entre 0 e 10.");
            return;
        }

        const situacao = determinarSituacao(media);

        resultDiv.style.color = "#333";
        resultDiv.innerHTML = `
            <strong>Aluno:</strong> ${nome}<br>
            <strong>Média:</strong> ${media.toFixed(1)}<br>
            <strong>Situação:</strong> ${situacao}
        `;
    });

    function exibirErro(mensagem) {
        resultDiv.style.backgroundColor = "#FFCCBC";
        resultDiv.style.color = "#D32F2F";
        resultDiv.textContent = mensagem;
    }
});

// Exporta apenas as funções lógicas para os testes
module.exports = {
    calcularMedia,
    determinarSituacao
};