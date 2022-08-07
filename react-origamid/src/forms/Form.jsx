import React from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";

const Form = () => {
  const [name, setName] = React.useState("");
  const [game, setGame] = React.useState("");
  const [color, setColor] = React.useState("");
  const [fruits, setFruits] = React.useState([]);

  return (
    <form>
      <Input
        type="text"
        value={name}
        setValue={setName}
        label="Name"
        id="name"
      />
      <Select
        options={["The Witcher 1", "The Witcher 2", "The Witcher 3"]}
        value={game}
        setValue={setGame}
      />
      <Radio
        options={["blue", "red", "black"]}
        value={color}
        setValue={setColor}
      />
      <Checkbox
        value={fruits}
        setValue={setFruits}
        options={["Grape", "Orange", "Lemon"]}
      />
    </form>
  );
};

export default Form;
