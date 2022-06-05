import Page from "./components/Page";
import ProductsExercise from "./ProductsExercise";
import ProductEffectExercise from "./useEffect/ProductEffectExercise";
import ProductStateExercise from "./useState/ProductStateExercise";
import ClientsExercise from "./useState/ClientsExercise";
import ScrollEffect from "./useEffect/ScrollEffect";

function App() {
  return (
    <div>
      <ClientsExercise />
      <hr />
      <ProductsExercise />
      <hr />
      <Page />
      <hr />
      <ProductStateExercise />
      <hr />
      <ProductEffectExercise />
      <hr />
      <ScrollEffect />
    </div>
  );
}

export default App;
