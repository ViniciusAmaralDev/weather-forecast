import Layout from "@components/layout";
import { Feather } from "@expo/vector-icons";
import Button from "@components/base/button";
import styled from "styled-components/native";
import CustomSearchBar from "@components/searchBar";
import Text from "@components/base/text";

export const Container = styled(Layout)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};
`;

export const SearchBar = styled(CustomSearchBar).attrs({
  containerStyle: { margin: 16 },
})``;

export const FlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 16 },
})``;

export const AddButton = styled(Button)`
  padding: 12px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.PURPLE};
`;

export const AddButtonText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};
`;

export const ThemeModeButton = styled(Button)`
  align-self: flex-end;
`;

export const ThemeModeIcon = styled(Feather).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.TEXT_SECONDARY,
}))``;
