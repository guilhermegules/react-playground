import { FormProvider, useForm } from "react-hook-form";

import Nav from "@components/Nav";
import { CurriculumProvider } from "@hooks/useCurriculum";
import { TodoProvider } from "@hooks/useTodo";
import CustomRoutes from "./routes";

const App = () => {
  const methods = useForm();

  return (
    <TodoProvider>
      <CurriculumProvider>
        <FormProvider {...methods}>
          <Nav />
          <CustomRoutes />
        </FormProvider>
      </CurriculumProvider>
    </TodoProvider>
  );
};

export default App;
