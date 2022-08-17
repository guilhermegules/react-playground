import React from "react";
import Radio from "./Radio";

const questions = [
  {
    question: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    answer: "React.createElement()",
    id: "p1",
  },
  {
    question: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    answer: 'import Component from "./Component"',
    id: "p2",
  },
  {
    question: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    answer: "useFetch()",
    id: "p3",
  },
  {
    question: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    answer: "use",
    id: "p4",
  },
];

const Questions = () => {
  const [answers, setAnswers] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  const [result, setResult] = React.useState(null);

  const [slide, setSlide] = React.useState(0);

  function handleChange({ target }) {
    setAnswers({ ...answers, [target.id]: target.value });
  }

  function finalResult() {
    const correctAnswers = questions.filter(
      ({ id, answer }) => answers[id] === answer
    );

    setResult(
      `Você acertou: ${correctAnswers.length} de ${questions.length} questões`
    );
  }

  function handleClick() {
    if (!answers[`p${slide + 1}`]) {
      alert("Selecione uma opção para seguir");
      return;
    }

    if (slide < questions.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      finalResult();
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {questions.map((question, index) => (
        <Radio
          active={slide === index}
          key={question.id}
          value={answers[question.id]}
          onChange={handleChange}
          options={question.options}
          question={question.question}
          {...question}
        />
      ))}

      {result ? (
        <p>{result}</p>
      ) : (
        <button onClick={handleClick}>Próxima</button>
      )}
    </form>
  );
};

export default Questions;
