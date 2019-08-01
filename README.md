# Curso RocketSeat ES6 Starter - Projeto Final
Ferramenta para retornar e listar repositórios do GitHub
---
Curso administrado pelo tutor Diego Fernandes e distribuído gratuitamente pela RocketSeat <br/>
Interessados acessar [RocketSeat Starter](https://rocketseat.com.br/starter) e requisitar seu acesso.

### Módulo 2 - WebPack Server

- [FEITO] Configurando Webpack
- [FEITO] import/export
- [FEITO] Webpack dev server

### Instalação e configuração do Webpack

1. Acesse o arquivo package.json e altere a linha que se refere a 'dependencies' para 'devDependencies'

Antes:<br/>
 `"dependencies" : {...`
<br />
Depois:<br/>
 ` "devDependencies": {... `
 
2. Pelo terminal, digite o comando abaixo para instalar o webpack e webpack cli

`yarn add webpack webpack-cli -D`

3. Via terminal execute o comando abaixo para instalar o babel-loader

`yarn add babel-loader@8.0.0-beta.0 -D`

4. Na raiz do projeto, crie um arquivo chamado 'webpack.config.js'
5. Dentro do arquivo criado, digite:

```
module.exports = {
  entry : './main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js,
  },
  module: {
    rules: [
      {
        text: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
}
```
6. No arquivo package.json altere o caminho do script para o informado abaixo

```
"scripts": {
  "dev" : "webpack --mode=development -w"
}
```
