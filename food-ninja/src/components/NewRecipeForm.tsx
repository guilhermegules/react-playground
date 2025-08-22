import { Input } from "antd";

export const NewRecipeForm = () => {
  return (
    <div style={{ padding: "32px" }}>
      <form style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div>
          <label htmlFor="title">Recipe Title</label>
          <Input placeholder="e.g. Ninja soup" id="title" type="text" />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients</label>
          <Input
            placeholder="e.g. Tofu, mushroom, garlic"
            id="ingredients"
            type="text"
          />
        </div>
      </form>
    </div>
  );
};
