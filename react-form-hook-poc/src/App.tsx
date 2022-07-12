import Nav from "@components/Nav";
import { TodoProvider } from "@hooks/useTodo";
import { FormProvider, useForm } from "react-hook-form";
import CustomRoutes from "./routes";

const App = () => {
  const methods = useForm();

  return (
    <TodoProvider>
      <FormProvider {...methods}>
        <Nav />
        <CustomRoutes />
      </FormProvider>
    </TodoProvider>
  );
};

export default App;
