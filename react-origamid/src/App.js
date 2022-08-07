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
import LocalStorage from "./customHooks/LocalStorage";
import FetchComponent from "./customHooks/FetchComponent";
import Form from "./forms/Form";

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

      <hr />

      <h2>Use local storage hook</h2>

      <LocalStorage />

      <hr />

      <h2>Use Fetch Hook</h2>

      <FetchComponent />

      <hr />

      <h2>Forms</h2>

      <Form />
    </div>
  );
}

export default App;
