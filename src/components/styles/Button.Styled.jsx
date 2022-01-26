import styled from "styled-components";

export const PrimaryButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ style }) => style.bg};
  color: white;
  font-size: 16px;
`;
