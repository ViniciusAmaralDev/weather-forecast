import styled from "styled-components/native";

type ContainerProps = { paddingTop: number; };

export const Container = styled.View<ContainerProps>`
  flex: 1;
  padding-top: ${({ paddingTop }) => paddingTop}px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};
`;

export const ScrollView = styled.ScrollView``;
