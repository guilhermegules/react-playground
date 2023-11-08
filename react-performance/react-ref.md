# React Ref and Key

A prop ref, assim como a prop key, é uma prop que não é reconhecida como prop no componente filho, e ela pode ser usada em qualquer elemento. Ao contrário do key, ela não é uma prop obrigatória, e sim uma prop opcional que pode ser utilizada a qualquer momento.

A palavra ref é uma abreviação de reference, ou referência em português, e ela serve exatamente para isso: fazer uma referência ao elemento real. Isso mesmo! Com o ref, você consegue acessar todos os atributos do DOM real dentro do React, como se estivesse utilizando o document.querySelector ou seletores parecidos!

Ref é uma arma poderosíssima para acessar o elemento diretamente, mas ela não é recomendada! O objetivo do React é abstrair o DOM e fazer tudo de forma declarativa, e o ref faz o exato oposto, agindo de forma imperativa.

Existem momentos em que ele é necessário, como por exemplo:

- Quando precisamos dar foco a um elemento input;
- Quando precisamos executar algo imperativo como forçar uma animação etc;
- Quando precisamos reproduzir uma mídia ou um vídeo ou algo relacionado a isto (como o Picture-in-picture por exemplo);
- Quando precisamos integrar o React com alguma biblioteca de terceiros e esta biblioteca exige imperatividade.

Agora um exemplo simples de um auto foco em React utilizando ref:

```tsx
import { useEffect, useRef } from "react";

function Input() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <>
      <input />
      <input ref={inputRef} />
    </>
  );
}

export default Input;
```

Neste caso, podemos reparar várias coisas interessantes:

- Criamos um ref com um hook chamado useRef, e colocamos o primeiro valor dele como null pois quem vai dar valor para este useRef é o elemento.
- Conseguimos colocar a variável que o useRef nos retorna dentro da prop ref do elemento input. Isto nos dá uma referência ao elemento real que este input renderiza no navegador.
- Dentro do useEffect, colocamos um if pois é possível que, na primeira renderização, o ref ainda não tenha sido populado com o valor do elemento.
- Utilizamos o inputRef.current para nos referir ao elemento real, que é algo bem parecido com o event.target que recebemos de eventos que os elementos disparam.

No final, pedimos para que o segundo input seja focado assim que o ref exista, então, se você rodar este código na sua máquina, verá que o segundo input será focado automaticamente! Caso você tenha interesse, pegue este código e brinque um pouco mais com ref, pois ele pode salvar o seu desenvolvimento alguma hora!
