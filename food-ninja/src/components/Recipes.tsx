import { DeleteOutlined } from "@ant-design/icons";
import { Avatar, List } from "antd";
import { firestore } from "../lib/firebase";
import { collection, getDocs, type DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";

export const Recipes = () => {
  const [recipes, setRecipes] = useState<DocumentData[]>([]);

  const getData = async () => {
    const { docs } = await getDocs(collection(firestore, "recipes"));

    setRecipes(docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <List
      itemLayout="horizontal"
      dataSource={recipes}
      renderItem={(item) => (
        <List.Item style={{ padding: "24px" }}>
          <List.Item.Meta
            avatar={<Avatar src={"/dish.png"} />}
            title={item.title}
            description={item.ingredients.join(",")}
          />
          <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
        </List.Item>
      )}
    />
  );
};
