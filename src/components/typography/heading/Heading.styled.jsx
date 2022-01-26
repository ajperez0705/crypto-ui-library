import styled from "styled-components";

export const HeadingOne = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 54px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.typography.primaryBody};
`;

export const HeadingTwo = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.typography.primaryBody};
`;

export const HeadingThree = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.typography.primaryBody};
`;
