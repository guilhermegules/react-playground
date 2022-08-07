const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select value={value} onChange={({ target }) => setValue(target.value)}>
      <option value="" disabled>
        Select
      </option>
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
