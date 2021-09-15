import { useEffect, useState } from "react";

const useLocalStorageState = (key, defaulValue) => {
  const [state, setState] = useState(() => {
    let value;

    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaulValue)
      );
    } catch (error) {
      value = defaulValue;
    }

    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorageState;
