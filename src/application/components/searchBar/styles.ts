import { AntDesign, Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};
`;

export const SearchIcon = styled(Feather).attrs(({ theme }) => ({
  size: 20,
  name: "search",
  color: theme.colors.TEXT_SECONDARY,
}))`
  margin-right: 8px;
`;

export const CloseIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 20,
  name: "close",
  color: theme.colors.TEXT_SECONDARY,
}))``;
