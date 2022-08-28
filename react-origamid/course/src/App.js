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
import UseFormComponent from "./customHooks/UseFormComponent";
import ProductAnimation from "./animations/ProductAnimation";
import SlideContainer from "./animations/SlideContainer";
import Button from "./propTypes/Button";
import Container from "./lazy-suspense/Container";
import HeaderContainer from "./memo/HeaderContainer";

function App() {
  return (
    <div>
      <h2>Animations</h2>

      <ProductAnimation />

      <hr />

      <SlideContainer />

      <hr />

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

      <hr />

      <UseFormComponent />

      <h2>Prop types</h2>

      <Button width={200}>Click</Button>

      <h2>Lazy and Suspense</h2>

      <Container />

      <h2>Memo</h2>

      <HeaderContainer />
    </div>
  );
}

export default App;
