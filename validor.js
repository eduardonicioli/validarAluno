// manipulador-dom.js

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

        // Agora não usamos mais require
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

        let cor;

        switch (situacao) {
            case "Aprovado":
                cor = "#C8E6C9"; // verde claro
                break;
            case "Recuperação":
                cor = "#FFF9C4"; // amarelo claro
                break;
            case "Reprovado":
                cor = "#FFCDD2"; // vermelho claro
                break;
            default:
                cor = "#F5F5F5"; // cinza claro para erro
        }

        resultDiv.style.backgroundColor = cor;
        resultDiv.style.color = "#333";
        resultDiv.innerHTML = `
            <strong>Aluno:</strong> ${nome}<br>
            <strong>Média:</strong> ${media.toFixed(1)}<br>
            <strong>Situação:</strong> <span style="font-weight:bold;">${situacao}</span>
        `;
    });

    function exibirErro(mensagem) {
        resultDiv.style.backgroundColor = "#FFCCBC";
        resultDiv.style.color = "#D32F2F";
        resultDiv.textContent = mensagem;
    }
});