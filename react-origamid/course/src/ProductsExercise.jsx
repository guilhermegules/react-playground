// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const products = [
  {
    id: 1,
    name: "Smartphone",
    price: "R$ 2000",
    colors: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    name: "Notebook",
    price: "R$ 3000",
    colors: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    name: "Tablet",
    price: "R$ 1500",
    colors: ["#365069", "#47c1c8", "#f95786"],
  },
];

const ProductsExercise = () => {
  return (
    <div>
      {products
        .filter((product) => Number(product.price.replace("R$ ", "") > 1500))
        .map((product) => (
          <div key={product.price}>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            {product.colors.map((color) => (
              <span
                key={Math.random() * 10000}
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
        ))}
    </div>
  );
};

export default ProductsExercise;
