import { Menu } from "antd";
import { useNavigate } from "react-router";

type SideNavProps = {
  isOpen: boolean;
};

export const SideNav = ({ isOpen }: SideNavProps) => {
  const navigate = useNavigate();
  return (
    isOpen && (
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={false}
        items={[
          {
            key: "1",
            label: "Home",
            onClick: () => navigate("/"),
          },
          {
            key: "2",
            label: "About",
            onClick: () => navigate("/about"),
          },
          {
            key: "3",
            label: "Contact",
            onClick: () => navigate("/contact"),
          },
        ]}
      />
    )
  );
};
