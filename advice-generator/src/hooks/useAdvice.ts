import { useEffect, useState } from "react";
import { Advice } from "../models/advice.model";
import { getAdvice, getAdviceById } from "../services/advices-service";

const useAdvice = () => {
  const [advice, setAdvice] = useState<Advice>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAdvice().then((response) => {
      setAdvice(response.data);
      setIsLoading(false);
    });
  }, []);

  const adviceHandler = (slipId: number) => {
    setIsLoading(true);
    getAdviceById(slipId).then((response) => {
      setAdvice(response.data);
      setIsLoading(false);
    });
  };

  return { advice, adviceHandler, isLoading };
};

export default useAdvice;
