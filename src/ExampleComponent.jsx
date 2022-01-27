import PropTypes from "prop-types";
import { PrimaryButton } from "./styles/Button.Styled";

function Button({
  label,
  backgroundColor = "red",
  size = "md",
  handleClick,
  ...props
}) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    bg: backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };
  return (
    <PrimaryButton onClick={handleClick} style={style}>
      {label}
    </PrimaryButton>
    // <PrimaryButton {...props} onClick={handleClick} style={style}>
    //   {label}
    // </PrimaryButton>
  );
}

// Button.defaultProps = {
//   bg: "yellow",
// };

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default Button;
