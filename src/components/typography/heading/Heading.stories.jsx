import Heading from "./Heading";

export default {
  title: "Components/Typography",
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Header = Template.bind({});
Header.args = {
  type: "h1",
  text: "This is Heading One",
};
