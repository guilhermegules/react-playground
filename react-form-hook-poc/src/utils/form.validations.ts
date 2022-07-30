export const errorMessageFormatter = (errorType: string) => {
  const messages: Record<string, string> = {
    required: "Campo obrigatório",
  };

  return messages[errorType];
};
