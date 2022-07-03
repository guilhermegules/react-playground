import Page from "./components/Page";
import ProductsExercise from "./ProductsExercise";
import ProductEffectExercise from "./useEffect/ProductEffectExercise";
import ProductStateExercise from "./useState/ProductStateExercise";
import ClientsExercise from "./useState/ClientsExercise";
import ScrollEffect from "./useEffect/ScrollEffect";
import Comments from "./useRef/Comments";
import SetTimeout from "./useRef/SetTimeout";
import Counter from "./useMemo/Counter";
import SlowOperation from "./useMemo/SlowOperation";
import UseCallback from "./useCallback/UseCallback";
import { ProductProvider } from "./context/ProductContext";
import ProductsContextExample from "./context/ProductsContextExample";

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
      <hr />
      <h2>Use ref test</h2>
      <Comments />
      <hr />
      <SetTimeout />
      <hr />
      <h2>Use memo test</h2>
      <Counter />
      <hr />
      <SlowOperation />
      <hr />
      <h2>Use callback test</h2>
      <UseCallback />
      <hr />
      <h2>Use Context exercise</h2>

      <ProductProvider>
        <ProductsContextExample />
      </ProductProvider>
    </div>
  );
}

export default App;
