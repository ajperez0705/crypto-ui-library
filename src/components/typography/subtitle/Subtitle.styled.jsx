import styled from "styled-components";

export const StyledSubtitle = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.typography.primaryBody};
`;
