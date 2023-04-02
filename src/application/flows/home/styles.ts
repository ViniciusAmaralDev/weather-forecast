import Layout from "@components/layout";
import { Feather } from "@expo/vector-icons";
import Button from "@components/base/button";
import styled from "styled-components/native";

export const Container = styled(Layout).attrs({
  scrollEnabled: true,
})`
  background-color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};
`;

export const ThemeModeButton = styled(Button)`
  align-self: flex-end;
`;

export const ThemeModeIcon = styled(Feather).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.TEXT_SECONDARY,
}))``;
