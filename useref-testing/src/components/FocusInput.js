import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const refInput = useRef();

  useEffect(() => {
    const { current } = refInput;

    const handleFocus = () => {
      current.classList.add("active");
    };

    const handleBlur = () => {
      current.classList.remove("active");
    };

    current.addEventListener("focus", handleFocus);
    current.addEventListener("blur", handleBlur);

    return () => {
      current.removeEventListener("focus", handleFocus);
      current.removeEventListener("blur", handleBlur);
    };
  });

  return (
    <div className="wrapper">
      <input type="text" ref={refInput} defaultValue="Focus me" />
    </div>
  );
};

export default FocusInput;
