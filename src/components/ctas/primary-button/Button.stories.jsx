import Button from "./Button";

export default {
  title: "Components/CTAs",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  text: "Click Me",
  size: "md",
  backgroundColor: "primary",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  text: "Click Me",
  size: "md",
  backgroundColor: "secondary",
};
