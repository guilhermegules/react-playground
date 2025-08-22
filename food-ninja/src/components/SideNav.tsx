import { Menu } from "antd";

type SideNavProps = {
  isOpen: boolean;
};

export const SideNav = ({ isOpen }: SideNavProps) => {
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
            onClick: () => {},
          },
          {
            key: "2",
            label: "About",
            onClick: () => {},
          },
          {
            key: "3",
            label: "Contact",
            onClick: () => {},
          },
        ]}
      />
    )
  );
};
