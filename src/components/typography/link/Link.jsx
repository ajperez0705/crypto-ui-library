import React from "react";
import PropTypes from "prop-types";
import GlobalStyles from "../../styles/Global.style";
import Theme from "../../styles/Theme";
import { StyledLink } from "./Link.styled";

function Link({ text, weight = "bold", size = "md" }) {
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
        <StyledLink style={style}>{text}</StyledLink>
        <GlobalStyles />
      </Theme>
    </>
  );
}

Link.propTypes = {
  text: PropTypes.string,
  weight: PropTypes.oneOf(["normal", "bold"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Link;
