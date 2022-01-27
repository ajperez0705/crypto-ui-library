import Link from "./Link";

export default {
  title: "Components/Typography",
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const LinkContent = Template.bind({});
LinkContent.args = {
  text: "Click Me",
  weight: "bold",
  size: "md",
};
