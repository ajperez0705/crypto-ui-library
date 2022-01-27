import styled from "styled-components";

export const StyledPretitle = styled.h5`
  color: ${({ theme }) => theme.colors.typography.primaryBody};
  font-weight: ${({ style }) => (style.weight === "bold" ? "bold" : "normal")};
  font-size: ${({ style }) => style.size};
`;
