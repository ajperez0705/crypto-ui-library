import NavLink from "./NavLink";

export default {
  title: "Components/Typography",
  component: NavLink,
};

const Template = (args) => <NavLink {...args} />;

export const NavLinkContent = Template.bind({});
NavLinkContent.args = {
  text: "Click Me",
  weight: "bold",
  size: "lg",
};
