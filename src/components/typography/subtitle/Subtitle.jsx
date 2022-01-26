import React from "react";
import PropTypes from "prop-types";

import GlobalStyles from "../../styles/Global.style";
import Theme from "../../styles/Theme";
import { StyledSubtitle } from "./Subtitle.styled";

function Subtitle({ text }) {
  return (
    <>
      <Theme>
        <StyledSubtitle>{text}</StyledSubtitle>
        <GlobalStyles />
      </Theme>
    </>
  );
}

Subtitle.propTypes = {
  text: PropTypes.string,
};

export default Subtitle;
