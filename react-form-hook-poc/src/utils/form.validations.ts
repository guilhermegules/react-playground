export const errorMessageFormatter = (errorType: string) => {
  const messages: Record<string, string> = {
    required: "Field is required",
  };

  return messages[errorType];
};
