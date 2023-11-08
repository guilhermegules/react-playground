# memo vs useMemo

Tá, mas qual é a diferença entre memo e useMemo?

Então… Na verdade, eles servem para a mesma coisa, mas o truque para entender a diferença é que o memo retorna um componente e o useMemo retorna uma variável, ou seja, a maior diferença entre os dois está no retorno! Mas, obviamente, não é só isso, né? Então, vamos entrar um pouco neste assunto!

O memo normalmente é utilizado em exports de componentes, mas nada impede que você o utilize dentro de um componente, mesmo que isto não seja recomendado. Veja isto funcionando na prática com o código que temos:

```tsx
function Buscador({ busca, setBusca }: Props) {
  const Elemento = memo(() => <CgSearch size={20} color="#4C4D5E" />);
  Elemento.displayName = "Ícone de busca";
  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        placeholder="Buscar"
      />
      <Elemento />
    </div>
  );
}
```

Se você rodar este buscador, ele funcionará, mas você acha que ele resolveria o problema?

A resposta é não! E não é por causa do memo, mas sim devido a onde ele está. Se você coloca um componente dentro de outro componente, sempre que o componente pai atualizar, ele recriará o componente filho, mesmo que ele esteja memoizado!

Tá duvidando? Tenta colocar um console.log assim:

```tsx
const Elemento = memo(() => {
  console.log("renderizado");
  return <CgSearch size={20} color="#4C4D5E" />;
});
```

Com ele, você verá que ele renderizará novamente sempre que colocar algo na busca, mas não porque ele está sendo atualizado - inclusive se você colocar para mostrar no React Developer Tools ele não piscará em verde -, mas sim porque ele está sendo quebrado e montado novamente!

Então o memo não funciona? Não é bem assim. Na verdade, o memo não foi inventado para ser usado dentro de um componente e, por isso, ele é usado em exports, mas, se você colocar ele fora do componente, ele irá funcionar normalmente:

```tsx
const Elemento = memo(() => {
  console.log("renderizado");
  return <CgSearch size={20} color="#4C4D5E" />;
});
Elemento.displayName = "Ícone de busca";

function Buscador({ busca, setBusca }: Props) {
  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        placeholder="Buscar"
      />
      <Elemento />
    </div>
  );
}
```

Desta forma, o componente só renderizará uma única vez como esperávamos.

por que utilizar o useMemo ao invés do memo?

Na verdade, neste caso, não existe muita diferença entre utilizar o memo e o useMemo, pois seria uma questão de gosto. Eu, pessoalmente, não gosto de ter mais de um componente no mesmo arquivo, porque pode deixar o código difícil de entender no futuro. Utilizando o useMemo, você não está criando um novo componente, apenas está armazenando um componente dentro de uma variável, e esta variável sim será memoizada! Então, se o caso era de memoizar um componente que já existe, não precisaria criar um componente só para memoizar outro componente, certo?

Para finalizar, o useMemo deve ser usado dentro de um componente, então, memoizando uma variável você a utiliza dentro do componente que você estiver, e terá no array de dependências os states/props necessários para que aquela variável atualize. Utilizar os states/props para atualizar também é possível no memo, mas, ao invés do array de dependências, teríamos que utilizar a função para comparar as props, e ela não é tão intuitiva quanto o useMemo.
