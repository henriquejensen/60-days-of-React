# Day 4 - Consumindo a API do Github com React+Redux+Axios - Arquitetura Flux e Promises

### Rodando o Projeto

```
npm install // para installar as dependências do projeto
npm start	// inicia o servidor
```
Acesse o [localhost:8000](http://localhost:8080/) para visualizar o projeto

### Descrição do desenvolvimento do projeto

Redux é uma implementação da arquitetura Flux que o React utiliza para as aplicações. Todo o state da
aplicação fica armazenada numa store, que é nada menos que uma grande função javascript para armazenar
as mudanças.
Axios é um cliente HTTP, uma biblioteca que interage com o XMLHttpRequest ou http do node. A vantagem
do seu uso é que cada requisição retorna uma promise, que é um objeto usado para processamento assíncrono.