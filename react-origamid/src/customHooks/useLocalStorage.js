import React from "react";

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = React.useState(() => {
    const localData = localStorage.getItem(key);

    return localData ?? initialValue;
  });

  React.useEffect(() => {
    localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
