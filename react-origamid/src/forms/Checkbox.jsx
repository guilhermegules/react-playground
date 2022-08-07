import React from "react";

const Checkbox = ({ options, value, setValue }) => {
  const handleChange = ({ target }) => {
    if (target.checked) {
      setValue([...value, target.value]);
      return;
    }
    setValue(value.filter((v) => v !== target.value));
  };

  return options.map((option) => {
    return (
      <label htmlFor={option} key={option}>
        <input
          type="checkbox"
          value={option}
          checked={value.includes(option)}
          onChange={(event) => handleChange(event)}
        />
        {option}
      </label>
    );
  });
};

export default Checkbox;
