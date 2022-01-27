import styled from "styled-components";

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.typography.primaryBody};
  font-size: ${({ style }) => style.size};
  font-style: normal;
  font-weight: ${({ style }) => (style.weight === "bold" ? "bold" : "normal")};
  text-decoration-line: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
