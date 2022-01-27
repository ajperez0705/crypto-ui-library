import React from "react";
import PropTypes from "prop-types";
import GlobalStyles from "../../styles/Global.style";
import Theme from "../../styles/Theme";
import { StyledButton } from "./Button.styled";
import { StyledButtonText } from "../../typography/button/Button.styled";

function Button({ text, size = "md", backgroundColor = "primary" }) {
  let buttonSize = size;
  let fontSize;

  switch (size) {
    case "sm":
      buttonSize = "6px 12px";
      fontSize = "12px";
      break;

    case "md":
      buttonSize = "8px 16px";
      fontSize = "16px";
      break;
    case "lg":
      buttonSize = "12px 20px";
      fontSize = "20px";
      break;

    default:
      break;
  }

  let style = {
    buttonSize,
    backgroundColor,
    fontSize,
  };

  return (
    <>
      <Theme>
        <StyledButton style={style}>{text}</StyledButton>
        <GlobalStyles />
      </Theme>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  backgroundColor: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
