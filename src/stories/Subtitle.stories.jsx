import Subtitle from "../components/typography/subtitle/Subtitle";

export default {
  title: "Components/Typography",
  component: Subtitle,
};

const Template = (args) => <Subtitle {...args} />;

export const Subtitles = Template.bind({});
Subtitles.args = {
  text: "This is Heading One",
};
