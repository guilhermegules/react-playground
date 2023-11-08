# Importação do React

Uma coisa que talvez você possa ter percebido e ter se perguntado o porquê é: quando importamos o React depois da versão 17, ele aparece isto daqui:

```js
React is defined but never used
```

Se eu estou utilizando React, por que agora eu não preciso mais importá-lo?

A partir da versão 17 do React, ele mudou a forma de trabalhar por debaixo dos panos. Antes, sem utilizarmos o React em nada no nosso arquivo, nós precisávamos importar o React, pois o JSX estava sendo convertido para React.createElement, mas agora ele está fazendo de forma diferente!

Vamos ver um código React padrão:

```js
import React from "react";

function App() {
  return <h1>Hello World</h1>;
}
```

Este código antes da versão 17 é transformado nisto:

```js
import React from "react";

function App() {
  return React.createElement("h1", null, "Hello world");
}
```

Depois da versão 17, o código é transformado nisto:

```js
import { jsx as _jsx } from "react/jsx-runtime";

function App() {
  return _jsx("h1", { children: "Hello world" });
}
```

Esta mudança traz duas melhorias:

- Não precisamos importar mais o React apenas para utilizar JSX!
- Existe [algumas melhorias de performance](https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md#motivation) que o React.createElement não aceitava.
