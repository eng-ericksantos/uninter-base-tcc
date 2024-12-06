# uninter-base-tcc

Projeto com uma base para início de desenvolvimento **backend (Java 23 & Spring Framework) / frontend (Node 20 & Angular 18 No-Standalone)**.

---

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação do Backend](#instalação-do-backend)
  - [Windows](#windows)
  - [macOS](#macos)
  - [Linux](#linux)
  - [Configuração Adicional](#configuração-adicional)
- [Instalação do Frontend](#instalação-do-frontend)
  - [Passo 1: Instalar o Node.js 20](#passo-1-instalar-o-nodejs-20)
  - [Passo 2: Instalar o Angular CLI](#passo-2-instalar-o-angular-cli)
  - [Passo 3: Rodar o Projeto Angular](#passo-3-rodar-o-projeto-angular)
  - [Passo 4: Resolver Problemas Comuns](#passo-4-resolver-problemas-comuns)
- [Dicas Adicionais](#dicas-adicionais)

---

## Pré-requisitos

Antes de começar, certifique-se de que os seguintes pré-requisitos estão atendidos:

- **Java Development Kit (JDK):** Necessário para o Maven funcionar.
  - Verificar instalação do Java:
    ```bash
    java -version
    ```
  - Se não estiver instalado, baixe o JDK [aqui](https://www.oracle.com/java/technologies/javase-downloads.html) ou use uma distribuição alternativa como o OpenJDK.

---

## Guia de Instalação Backend

### Windows

1. **Baixar o Maven**
   - Acesse a página oficial do Apache Maven: [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi).
   - Baixe o arquivo binário ZIP (por exemplo, `apache-maven-3.9.4-bin.zip`).

2. **Extrair o Arquivo**
   - Extraia o conteúdo para um diretório, como:
     ```
     C:\Program Files\Apache\maven
     ```

3. **Configurar as Variáveis de Ambiente**
   - **Variável MAVEN_HOME:**
     1. Abra as Configurações do Sistema (pesquise "Variáveis de Ambiente").
     2. Clique em **Variáveis de Ambiente**.
     3. Em **Variáveis do Sistema**, clique em **Novo**:
        - Nome da variável: `MAVEN_HOME`
        - Valor: `C:\Program Files\Apache\maven\apache-maven-3.9.4`
   - **Atualizar a variável PATH:**
     1. Encontre a variável `Path` e clique em **Editar**.
     2. Adicione:
       ```
       %MAVEN_HOME%\bin
       ```

4. **Verificar a Instalação**
   ```bash
   mvn -v

5. **Definir o JAVA_HOME**
- **Identifique o caminho do JDK:**

    - Windows: algo como C:\Program Files\Java\jdk-11.
    - macOS/Linux: /usr/lib/jvm/java-11-openjdk.
    - Configure a variável:

    1. Adicione JAVA_HOME como variável de ambiente:
       ```
       %C:\Program Files\Java\jdk-23%
       ```
# Guia de Instalação Frontend

Este guia explica como configurar o ambiente para rodar o projeto Angular, incluindo a instalação do Node.js 20 e da versão mais recente do Angular CLI.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados no seu sistema:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) versão 20
- Gerenciador de pacotes `npm` (instalado junto com o Node.js)

---

## Passo a Passo

### 1. Instalar o Node.js 20
1. Acesse o site oficial do Node.js em [https://nodejs.org/](https://nodejs.org/).
2. Faça o download da versão 20.x LTS para o seu sistema operacional.
3. Siga as instruções de instalação.

> **Dica:** Após a instalação, verifique se o Node.js está funcionando corretamente:
```bash
node -v
# Deve retornar algo como: v20.x.x

npm -v
# Deve retornar a versão do npm instalada

### 2. Instalar o Angular CLI
O Angular CLI é necessário para criar e gerenciar projetos Angular. Instale a versão mais recente globalmente:
```bash
npm install -g @angular/cli

### Rodar a aplicação

> npm run start

