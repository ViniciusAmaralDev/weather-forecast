import styled from "styled-components/native";

export const Label = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
`;
