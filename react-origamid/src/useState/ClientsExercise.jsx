// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
import { useState } from "react";

const clientsList = [
  {
    name: "Mario",
    age: 31,
    purchases: [
      { name: "Notebook", price: "R$ 2500" },
      { name: "Geladeira", price: "R$ 3000" },
      { name: "Smartphone", price: "R$ 1500" },
      { name: "Guitarra", price: "R$ 3500" },
    ],
    active: false,
  },
  {
    name: "Luana",
    age: 27,
    purchases: [
      { name: "Notebook", price: "R$ 2500" },
      { name: "Geladeira", price: "R$ 3000" },
      { name: "Smartphone", price: "R$ 1500" },
    ],
    active: true,
  },
];

const ClientsExercise = () => {
  const [clients] = useState(clientsList);

  const getTotalCost = (purchases) => {
    return purchases
      .map((item) => item.price.replace("R$ ", ""))
      .reduce((prev, curr) => Number(prev) + Number(curr));
  };

  return (
    <div>
      {clients.map((client) => {
        return (
          <div key={Math.random() * client.age}>
            <h1>{client.name}</h1>
            <h2>{client.age}</h2>
            <p style={{ color: client.active ? "green" : "red" }}>
              Situação: {client.active ? "Ativa" : "Inativa"}
            </p>
            <p>Total: {getTotalCost(client.purchases)}</p>
            <p>
              {getTotalCost(client.purchases) > 10000 && "Gasto muito alto"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ClientsExercise;
