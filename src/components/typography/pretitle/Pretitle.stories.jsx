import Pretitle from "./Pretitle";

export default {
  title: "Components/Typography",
  component: Pretitle,
};

const Template = (args) => <Pretitle {...args} />;

export const PretitleContent = Template.bind({});
PretitleContent.args = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
