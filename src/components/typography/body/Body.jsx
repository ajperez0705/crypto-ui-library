import React from "react";
import PropTypes from "prop-types";
import GlobalStyles from "../../styles/Global.style";
import Theme from "../../styles/Theme";
import { StyledBody } from "./Body.styled";

function Body({ text, weight = "normal", size = "md" }) {
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
    weight,
    fontSize,
  };

  return (
    <>
      <Theme>
        <StyledBody style={style}>{text}</StyledBody>
        <GlobalStyles />
      </Theme>
    </>
  );
}

Body.propTypes = {
  text: PropTypes.string,
  weight: PropTypes.oneOf(["normal", "bold"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Body;
