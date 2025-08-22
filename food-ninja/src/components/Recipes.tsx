import { DeleteOutlined } from "@ant-design/icons";
import { Avatar, List } from "antd";

export const Recipes = () => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={[
        {
          recipeName: "Edame Noodles",
          ingredients: ["Edame Beans", "Noodels", "Garlic oil"],
          image: "dish.png",
        },
      ]}
      renderItem={(item) => (
        <List.Item style={{ padding: "24px" }}>
          <List.Item.Meta
            avatar={<Avatar src={item.image} />}
            title={item.recipeName}
            description={item.ingredients.join(",")}
          />
          <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
        </List.Item>
      )}
    />
  );
};
