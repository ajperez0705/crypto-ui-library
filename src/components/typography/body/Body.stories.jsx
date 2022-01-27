import Body from "./Body";

export default {
  title: "Components/Typography",
  component: Body,
};

const Template = (args) => <Body {...args} />;

export const BodyContent = Template.bind({});
BodyContent.args = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};
