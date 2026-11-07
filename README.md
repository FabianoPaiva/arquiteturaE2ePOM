# 🚀 Automação E2E — POM, Fixture de Sessão e Data-Driven

[![Playwright](https://img.shields.io/badge/Playwright-1.42+-green.svg?style=flat-square&logo=playwright)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Status: Aprovado](https://img.shields.io/badge/Status-100%25%20Verde-success?style=flat-square)](https://github.com)

Projeto de automação de testes End-to-End (E2E) desenvolvido como parte da **Atividade Prática 2**, elevando o nível de maturidade arquitetural com a transição de scripts isolados para um design escalável, modular e robusto utilizando **Playwright** e **TypeScript**.

---

## 📋 Sumário
1. [Contexto e Objetivos](#-contexto-e-objetivos)
2. [Plataforma Alvo e Credenciais](#-plataforma-alvo-e-credenciais)
3. [Ferramentas e Tecnologias](#-ferramentas-e-tecnologias)
4. [Estrutura Canônica de Pastas](#-estrutura-canônica-de-pastas)
5. [Arquitetura e Padrões Implementados](#-arquitetura-e-padrões-implementados)
6. [Pré-requisitos](#-pré-requisitos)
7. [Instalação e Configuração](#-instalação-e-configuração)
8. [Comandos de Execução](#-comandos-de-execução)
9. [Notas Técnicas do Ambiente](#-notas-técnicas-do-ambiente)

---

## 🎯 Contexto e Objetivos

Esta suíte de testes valida fluxos críticos em uma aplicação do mundo real, aplicando rigorosas práticas de engenharia de qualidade de software:
* **Page Object Model (POM):** Isolamento completo de seletores e comportamentos de tela, garantindo manutenibilidade.
* **Fixture de Sessão Autenticada:** Otimização de tempo de execução injetando estados autenticados diretamente nos testes através da extensão nativa do Playwright (`test.extend`).
* **Data-Driven Testing (DDT):** Parametrização de cenários utilizando massa de dados tipada externa (`usuarios.data.ts`), validando fluxos positivos, negativos e bloqueados.
* **Boas Práticas:** Zero esperas arbitrárias (`waitForTimeout`), ausência de asserções nos arquivos de Page Object e aplicação de asserções web-first assíncronas.

---

## 🌐 Plataforma Alvo e Credenciais

* **Plataforma Escolhida:** **SauceDemo (Swag Labs)**
* **URL Base:** `https://www.saucedemo.com`

### Credenciais Públicas de Teste:
* **Usuário Padrão (Sucesso):** `standard_user` / `secret_sauce`
* **Usuário Bloqueado:** `locked_out_user` / `secret_sauce`
* **Cenários Negativos:** Validação automatizada de mensagens de erro para credenciais inválidas.

---

## 🧰 Ferramentas e Tecnologias

* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita, módulos ESM nativos e suporte a `verbatimModuleSyntax`).
* **Framework de Automação:** [Playwright Test](https://playwright.dev) (Suporte a múltiplos navegadores, tracing, relatórios em HTML e asserções web-first).
* **Gerenciador de Pacotes:** `npm` (Node.js LTS).

---

## 📂 Estrutura Canônica de Pastas

```text
arquiteturaE2ePOM/
├── data/
│   └── usuarios.data.ts          # Matriz de cenários tipados (Data-Driven)
├── pages/
│   ├── LoginPage.ts              # Page Object da tela de Login (sem expects)
│   └── DashboardPage.ts          # Page Object da Área Restrita / Painel (com logout)
├── fixtures/
│   └── auth.fixture.ts           # Custom test com estado autenticado injetado
├── tests/
│   ├── dashboard-sessao.spec.ts  # Testes que iniciam direto na área logada via fixture
│   └── login-data-driven.spec.ts # Testes dinâmicos com loop for...of e massa externa
├── playwright.config.ts          # Configuração global do runner (baseURL, projetos, retries)
├── tsconfig.json                 # Configurações estritas do TypeScript (ESM / NodeNext)
├── package.json                  # Dependências e scripts de execução
└── README.md                     # Documentação oficial da suíte
```

---

## 🏛️ Arquitetura e Padrões Implementados

### 1. Page Object Model (POM)
Os arquivos `LoginPage.ts` e `DashboardPage.ts` encapsulam todos os locators e interações. O construtor recebe estritamente a instância de `Page` (`constructor(private page: Page)`). **Nenhum arquivo POM contém asserções (`expect`)**, mantendo a responsabilidade de validação restrita exclusivamente aos arquivos de teste (`.spec.ts`).

### 2. Fixture de Sessão (`auth.fixture.ts`)
A fixture customizada estende o runner padrão (`base.extend`) para realizar o fluxo de login nos bastidores. O teste consome diretamente o objeto `dashboardPage` já logado, reduzindo redundâncias e acelerando a execução da suíte.

### 3. Data-Driven Testing (`usuarios.data.ts`)
Uma interface TypeScript (`UsuarioData`) define o contrato estrito da massa. O arquivo `login-data-driven.spec.ts` consome a matriz utilizando um loop `for...of` com nomes descritivos gerados via Template Strings (`CT - Login: ${cenario.descricao}`).

---

## ⚙️ Pré-requisitos

Certifique-se de ter instalado em sua máquina:
* **Node.js** (Versão 18 LTS ou superior recomendada)
* **npm** (Incluso no pacote do Node.js)

---

## 📥 Instalação e Configuração

1. **Baixe ou clone** o repositório do projeto para sua máquina local.
2. Abra o terminal na raiz do projeto e **instale as dependências**:
   ```bash
   npm install
   ```
3. **Instale os navegadores** binários do Playwright:
   ```bash
   npx playwright install
   ```

---

## 🚀 Comandos de Execução

Você pode utilizar os seguintes comandos no terminal para interagir com a suíte de testes:

* **Executar todos os testes em modo headless (Terminal):**
  ```bash
  npx playwright test
  ```

* **Executar os testes utilizando a interface gráfica interativa (UI Mode):**
  ```bash
  npx playwright test --ui
  ```

* **Executar visualizando os navegadores em ação (Headed Mode):**
  ```bash
  npx playwright test --headed
  ```

* **Visualizar o relatório HTML detalhado da última execução:**
  ```bash
  npx playwright show-report
  ```

---

## 💡 Notas Técnicas do Ambiente
* **Módulos ESM:** O projeto está configurado com `"type": "module"` no `package.json` e padrão `node16`/`nodenext` no `tsconfig.json`, garantindo compatibilidade moderna com imports e extensões explícitas `.js`.
* **Tipagem Estrita:** Flags como `verbatimModuleSyntax` e `exactOptionalPropertyTypes` foram rigorosamente atendidas, utilizando `import type` para classes de tipagem do Playwright.