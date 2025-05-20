document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const resultDiv = document.createElement("div");
    const listaAlunosDiv = document.createElement("div");

    // Configuração da div de resultado
    resultDiv.id = "resultado";
    resultDiv.style.marginTop = "2rem";
    resultDiv.style.padding = "1rem";
    resultDiv.style.borderRadius = "8px";
    resultDiv.style.fontSize = "1.1rem";
    resultDiv.style.textAlign = "center";
    resultDiv.style.maxWidth = "500px";
    resultDiv.style.marginLeft = "auto";
    resultDiv.style.marginRight = "auto";

    // Configuração da lista de alunos
    listaAlunosDiv.id = "lista-alunos";
    listaAlunosDiv.style.marginTop = "3rem";
    listaAlunosDiv.style.maxWidth = "500px";
    listaAlunosDiv.style.marginLeft = "auto";
    listaAlunosDiv.style.marginRight = "auto";

    // Adiciona elementos na página
    form.parentNode.appendChild(resultDiv);
    form.parentNode.appendChild(listaAlunosDiv);

    // Carrega alunos salvos no localStorage
    carregarAlunos();

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

        // Atualiza o resultado visual
        resultDiv.style.backgroundColor = cor;
        resultDiv.style.color = "#333";
        resultDiv.innerHTML = `
            <strong>Aluno:</strong> ${nome}<br>
            <strong>Média:</strong> ${media.toFixed(1)}<br>
            <strong>Situação:</strong> <span style="font-weight:bold;">${situacao}</span>
        `;

        // Salva aluno e atualiza a lista
        const aluno = { nome, nota1, nota2, media: media.toFixed(1), situacao };
        salvarAluno(aluno);
        atualizarLista(aluno);
    });

    function exibirErro(mensagem) {
        resultDiv.style.backgroundColor = "#FFCCBC";
        resultDiv.style.color = "#D32F2F";
        resultDiv.textContent = mensagem;
    }

    function salvarAluno(aluno) {
        const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
        alunos.push(aluno);
        localStorage.setItem("alunos", JSON.stringify(alunos));
    }

    function carregarAlunos() {
        const alunos = JSON.parse(localStorage.getItem("alunos")) || [];
        alunos.forEach(atualizarLista);
    }

    function atualizarLista(aluno) {
        const alunoEl = document.createElement("div");
        alunoEl.classList.add("lista-aluno");

        alunoEl.innerHTML = `
            <strong>${aluno.nome}</strong><br>
            Média: ${aluno.media} - 
            Situação: <strong>${aluno.situacao}</strong>
        `;
        alunoEl.style.backgroundColor = getCorFundo(aluno.situacao);
        alunoEl.style.padding = "0.75rem";
        alunoEl.style.marginBottom = "0.5rem";

        listaAlunosDiv.appendChild(alunoEl);
    }

    function getCorFundo(situacao) {
        switch (situacao) {
            case "Aprovado": return "#C8E6C9";
            case "Recuperação": return "#FFF9C4";
            case "Reprovado": return "#FFCDD2";
            default: return "#FFEBEE";
        }
    }
    
    function limparDados() {
    if (confirm("Tem certeza que deseja limpar todos os registros?")) {
        localStorage.removeItem("alunos");
        document.getElementById("lista-alunos").innerHTML = "";
    }
    }
});