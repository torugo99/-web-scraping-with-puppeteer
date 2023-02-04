# 🔎 | Web Scraping.

## 💻 | Projeto: Web Scraping utilizando Puppeteer.

Seja bem vindo, esse projeto foi feito para colocar em prática um desafio onde eu iria minerar dados de seus produtos cadastrados no site, com a minha experiência com API's, faço uma geração de JSON com todas as informações pra a utilização em uma futura API.

- Colocando em prática alguns conceitos e utilizando o Node.
- Utilizando a linguagem JavaScript.
- Utilizando o Puppeteer.
- Utilizando a extensão JSON formatter (VSCode), para formatar o corpo do JSON para melhor visualização.

## ⚙ | Projeto.

### ✔ | Tecnologias:
- Node 16.15.0
- Puppeteer 19.5.2

### 📁 | Uma breve visão do projeto:
Minha aplicação em si é bem simples e busca trazer os seguintes dados:
- Name.
- Description.
- Price.
- Memorys.
- URL.

## ⌨ | Comandos

| **Comandos**                                   |                                               **Descrição**|
|------------------------------------------------|------------------------------------------------------------|
|                                      `cd .\src`|           Entra dentro da pasta onde se encontra o Index.js|
|                                 `node index.js`|        Comando para Inicia o projeto e realizar a mineração|
|                       `headless: true or false`| Ao ativar esse comando para true or false(no código), podemos ter o feedback visual do que estamos acessando e processando, eu prefiro deixa como true, no caso não irá abrir o navegador, em quanto o false irá.|

## Retorno do JSON:

Como informado a cima, fiz um pequeno retorno em JSON do que mineramos, aqui vai um exemplo de como nosso retorno vem:
```json
{
    "name_and_description": "Asus VivoBook X441NA-GA190 Chocolate Black, 14\", Celeron N3450, 4GB, 128GB SSD, Endless OS, ENG kbd",
    "price": "$295.99",
    "memorys": { "memorys": "128 256 512 1024", "memorys_unavailable": "1024" },
    "url": "https://webscraper.io/test-sites/e-commerce/allinone/product/545"
  },
  
  {
    "name_and_description": "Prestigio SmartBook 133S Dark Grey, 13.3\" FHD IPS, Celeron N3350 1.1GHz, 4GB, 32GB, Windows 10 Pro + Office 365 1 gadam",
    "price": "$299.00",
    "memorys": { "memorys": "128 256 512 1024", "memorys_unavailable": "1024" },
    "url": "https://webscraper.io/test-sites/e-commerce/allinone/product/546"
  },
  ...
  src/docs/export.json
```

<b>Segue a lista de commits para verificar o que foi implementado e alterado!</b>

## 👩‍💻 Meus Links:

- Github: [Victor Hugo.](https://github.com/torugo99)
- LinkedIn: [Victor Hugo.](https://www.linkedin.com/in/victor-hugo99/)
- Meu Site: [Victor99dev.](http://victor99dev.site/)

### 😀 | Créditos e Agradecimentos:
- Todas as informações do Puppeteer, sendo comandos ou qualquer outra informação foi retirada da documentação oficial.
- Documentações: 
    - [Puppeteer](https://pptr.dev/)
    - [Node.JS](https://nodejs.org/en/docs/)
- Extensão de formatar o JSON: [Link](https://marketplace.visualstudio.com/items?itemName=ClemensPeters.format-json)
