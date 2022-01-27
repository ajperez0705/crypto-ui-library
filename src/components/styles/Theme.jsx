import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    typography: {
      primaryBody: "#2E2E34",
      subtleBody: "#4A4A50",
      lightBody: "#FAFCFE",
    },
    brandColors: {
      primaryBrand: "#2F3E46",
      secondaryBrand: "#F2F475",
      tertiaryBrand: "#87B095",
      accentLimeGreen: "#75F4A0",
      accentBlue: "#76CDD2",
      accentRed: "#EA7482",
      accentWolfGrey: "#8A9596",
      accentCloudWhite: "#EFEFFD",
      accentWhite: "#FFFFFF",
      success: "#31D0AA",
      error: "#FD3636",
    },
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
