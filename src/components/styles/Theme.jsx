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
      accent_limeGreen: "#75F4A0",
    },
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
