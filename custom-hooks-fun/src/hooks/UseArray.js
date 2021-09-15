import { useCallback, useState } from "react";

const useArray = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    add: useCallback(
      (newValue) => setValue((values) => [...values, newValue]),
      []
    ),
    clear: useCallback(() => setValue([]), []),
    removeById: useCallback(
      (id) =>
        setValue((list) => list.filter((value) => value && value.id !== id)),
      []
    ),
    removeIndex: useCallback(
      (indexToRemove) =>
        setValue((list) => list.filter((_, index) => index !== indexToRemove)),
      []
    ),
  };
};

export default useArray;
