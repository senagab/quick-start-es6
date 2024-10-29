# ES6

<p align=right>
  <a href="https://github.com/senagab/es6">
    <img src="https://img.shields.io/badge/javascript-es6-8A2BE2?logo=github" Alt="EcmaScript 6">
    </img> 
  </a>
</p>

## Instalação Babel 

```npm install --save-dev @babel/core @babel/cli```


## Setup Babel

```
  "scripts": {
    "build": "babel src -d dist"
  },
```

Lembrar de criar uma ```./src``` para a ```npm run build``` funcionar.

## Instalação Preset 

```npm install --save-dev @babel/preset-env```

## Configuração Preset

Criar novo arquivo _babel.config.js_ na raiz.

Dentro de _babel.config.js_:

```
{
    "presets": ["@babel/preset-env"]
}
```
Adicionar configuração de ```browserslist``` antes de ```dependencies``` em __package.json__.

```
  "browserslist": "> 0.25%",
  "devDependencies": {
    "@babel/cli": "^7.25.9",
    "@babel/core": "^7.26.0",
    "@babel/preset-env": "^7.26.0"
  }
```

## Testing

<sup>crie um arquivo js em ./src e adicione um console.log("teste") para validação.<sup>


```npm run build```

```node .\dist\teste.js```





