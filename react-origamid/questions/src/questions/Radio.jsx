const Radio = ({ options, value, onChange, question, active, ...props }) => {
  if (!active) return null;

  return (
    <fieldset
      style={{
        padding: "2rem",
        marginBottom: "1rem",
        border: "2px solid #eee",
      }}
    >
      <legend style={{ fontWeight: "bold" }}>{question}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: "1rem", fontFamily: "monospace" }}
        >
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={onChange}
            {...props}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
