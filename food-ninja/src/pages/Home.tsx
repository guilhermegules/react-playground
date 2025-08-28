import { FloatButton, Modal } from "antd";
import { Recipes } from "../components/Recipes";
import { PlusOutlined } from "@ant-design/icons";
import { NewRecipeForm } from "../components/NewRecipeForm";
import { useState } from "react";

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const showForm = () => {
    setIsFormOpen(true);
  };

  const handleOk = () => {
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <div style={{ padding: 24 }}>
        <h2>Recipes</h2>
      </div>
      <Recipes />
      <FloatButton onClick={showForm} icon={<PlusOutlined />} type="primary" />
      <Modal
        title="New Recipe"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isFormOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <NewRecipeForm />
      </Modal>
    </>
  );
};

export default Home;
