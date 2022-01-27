import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.typography.primaryBody};
  font-size: ${({ style }) => style.fontSize};
  font-style: normal;
  font-weight: 900;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  background-color: ${({ style, theme }) =>
    style.backgroundColor === "primary"
      ? "transparent"
      : theme.colors.brandColors.secondaryBrand};
  padding: ${({ style }) => style.buttonSize};
  cursor: pointer;
  border: 3px solid ${({ theme }) => theme.colors.brandColors.primaryBrand};

  &:hover {
    box-shadow: 3px 2px 0px
      ${({ theme }) => theme.colors.brandColors.primaryBrand};
  }
`;
