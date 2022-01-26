import React from "react";
import PropTypes from "prop-types";

import GlobalStyles from "../../styles/Global.style";
import Theme from "../../styles/Theme";
import { HeadingOne, HeadingTwo, HeadingThree } from "./Heading.styled";

function Heading({ type = "h1", text }) {
  let renderedHeading;
  switch (type) {
    case "h1":
      renderedHeading = <HeadingOne>{text}</HeadingOne>;
      break;

    case "h2":
      renderedHeading = <HeadingTwo>{text}</HeadingTwo>;
      break;

    case "h3":
      renderedHeading = <HeadingThree>{text}</HeadingThree>;
      break;

    default:
      break;
  }

  return (
    <>
      <Theme>
        {renderedHeading}
        <GlobalStyles />
      </Theme>
    </>
  );
}

Heading.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3"]),
  text: PropTypes.string,
};

export default Heading;
