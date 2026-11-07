# Automação E2E — POM, Fixture de Sessão e Data-Driven

Projeto desenvolvido em **TypeScript** com **Playwright**, aplicando os conceitos avançados de arquitetura de automação em escala para a plataforma **SauceDemo (Swag Labs)**.

## 🌐 Plataforma Alvo
* **Nome:** SauceDemo (Swag Labs)
* **URL Base:** `https://www.saucedemo.com`

## 🔑 Credenciais Públicas Utilizadas
* **Usuário Padrão:** `standard_user` / `secret_sauce`
* **Usuário Bloqueado:** `locked_out_user` / `secret_sauce`

## 📁 Estrutura de Pastas
```text
meu-projeto-automacao/
├── data/
│   └── usuarios.data.ts          # Matriz de cenários tipados (Data-Driven)
├── pages/
│   ├── LoginPage.ts              # Page Object da tela de Login
│   └── DashboardPage.ts          # Page Object da Área Restrita / Painel
├── fixtures/
│   └── auth.fixture.ts           # Custom test com estado autenticado injetado
├── tests/
│   ├── dashboard-sessao.spec.ts  # Testes que iniciam direto na área logada
│   └── login-data-driven.spec.ts # Testes dinâmicos com loop for...of
├── playwright.config.ts
├── package.json
└── README.md