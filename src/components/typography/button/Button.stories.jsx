import Button from "./Button";

export default {
  title: "Components/Typography",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const ButtonContent = Template.bind({});
ButtonContent.args = {
  text: "Click Me",
};
