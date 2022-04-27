import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { SubSidebar } from "./SubSidebar";
import { SubSidebarItem } from "./SubSidebarItem";

export default {
  title: "atoms/SubSidebar",
  component: SubSidebar,
} as ComponentMeta<typeof SubSidebar>;

const menu = [
  {
    label: "Payment Accounts",
    isActive: true,
  },
  {
    label: "Node Settings",
  },
  {
    label: "Security",
  },
  {
    label: "Wallet",
  },
  {
    label: "Back",
  },
];

const Template: ComponentStory<typeof SubSidebar> = () => {
  return (
    <SubSidebar>
      {menu.map((item) => (
        <SubSidebarItem
          key={item.label}
          label={item.label}
          isActive={item.isActive}
        />
      ))}
    </SubSidebar>
  );
};

export const Default = Template.bind({});
Default.args = {};
