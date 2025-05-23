# Sistema de Cálculo de Média Escolar 📚

> Projeto acadêmico para calcular a média de dois valores e determinar a situação do aluno: **Aprovado**, **Recuperação** ou **Reprovado**.

[![CI Tests](https://github.com/eduardonicioli/validarAluno/actions/workflows/test.yml/badge.svg )](https://github.com/eduardonicioli/validarAluno/actions )<br>
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=eduardonicioli_validarAluno&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=eduardonicioli_validarAluno)
---

## 🧪 Funcionalidades

- Validação de notas entre 0 e 10
- Cálculo automático da média
- Determinação da situação do aluno
- Testes automatizados com Jest
- Análise de qualidade de código com SonarCloud

---

## 🚀 Como Executar Localmente

###  Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git 
cd seu-repositorio

```
## 📋 Estrutura do Projeto
```bash

projeto/
├── index.html              # Página principal
├── style.css               # Estilização visual
├── calculo.js              # Lógica de cálculo e validação
├── validador.js      # Manipulação do DOM
├── __tests__/              # Pasta com testes unitários
│   └── calculo.test.js
├── package.json
└── README.md
```
## 🧪 Rodar os Testes
```bash
npm test
# Ou com cobertura
npm test -- --coverage
```
## 📊 Cobertura de Testes
```bash
coverage/lcov-report/index.html
```
## 🌐 Integração Contínua
O projeto é testado automaticamente no GitHub Actions e analisado quanto à qualidade no SonarCloud.

🔗 [Ver análise no SonarCloud](https://sonarcloud.io/summary/new_code?id=eduardonicioli_validarAluno )


## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Jest (testes automatizados)
- SonarCloud (análise de qualidade)
- GitHub Actions (integração contínua)
