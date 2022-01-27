import styled from "styled-components";

export const StyledNavLink = styled.a`
  color: ${({ theme }) => theme.colors.typography.primaryBody};
  font-size: ${({ style }) => style.size};
  font-style: normal;
  font-weight: ${({ style }) => (style.weight === "bold" ? "bold" : "normal")};
  text-decoration-line: none;
`;
