import { FormProvider, useForm } from "react-hook-form";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./hooks/useTodo";

const App = () => {
  const methods = useForm();
  return (
    <TodoProvider>
      <FormProvider {...methods}>
        <TodoList />
      </FormProvider>
    </TodoProvider>
  );
};

export default App;
