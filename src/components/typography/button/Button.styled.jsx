import styled from "styled-components";

export const StyledButtonText = styled.h1`
  color: ${({ theme }) => theme.colors.typography.primaryBody};
  font-size: ${({ style }) => style.size};
  font-style: normal;
  font-weight: 900;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;
