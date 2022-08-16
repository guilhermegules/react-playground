import useForm from "./useForm";

const UseFormComponent = () => {
  const cep = useForm("cep");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cep.validate()) {
      console.log("send");
      return;
    }

    console.log("not send");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cep">CEP</label>
      <input
        type="text"
        id="cep"
        placeholder="00000-000"
        value={cep.value}
        onChange={cep.onChange}
        onBlur={cep.onBlur}
      />
      {cep.error && <p>{cep.error}</p>}
    </form>
  );
};

export default UseFormComponent;
