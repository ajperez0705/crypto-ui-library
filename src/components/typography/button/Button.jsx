import React from "react";
import PropTypes from "prop-types";
import GlobalStyles from "../../styles/Global.style";
import Theme from "../../styles/Theme";
import { StyledButtonText } from "./Button.styled";

function Button({ text, size = "md" }) {
  let fontSize = size;

  switch (size) {
    case "sm":
      fontSize = "12px";
      break;

    case "md":
      fontSize = "16px";
      break;

    case "lg":
      fontSize = "20px";
      break;

    default:
      break;
  }

  const style = {
    fontSize,
  };

  return (
    <>
      <Theme>
        <StyledButtonText style={style}>{text}</StyledButtonText>
        <GlobalStyles />
      </Theme>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Button;
