import React from "react";

const validations = {
  cep: {
    regex: new RegExp(/^\d{5}-?\d{3}$/),
    message: "Add a valid CEP",
  },
};

const useForm = (dataType) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (value.length === 0) {
      setError("Required field");
      return false;
    }

    if (!validations[dataType].regex.test(value)) {
      setError(validations[dataType].message);
      return false;
    }

    setError(null);
    return true;
  }

  function onChange({ target }) {
    if (error) {
      validate(target.value);
    }

    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
