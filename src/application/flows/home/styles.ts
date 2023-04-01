import Layout from "@components/layout";
import Text from "@components/base/text";
import { Feather } from "@expo/vector-icons";
import Button from "@components/base/button";
import styled from "styled-components/native";

type LabelCardProps = { secondary?: boolean };

export const Container = styled(Layout)`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};
`;

export const VerticalContainer = styled.View``;

export const ThemeModeButton = styled(Button)`
  align-self: flex-end;
`;

export const ThemeModeIcon = styled(Feather).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.TEXT_SECONDARY,
}))``;

export const Card = styled.View`
  padding: 16px;
  border-radius: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_SECONDARY};
`;

export const TitleCard = styled(Text)`
  font-size: 14px;
  margin-bottom: 8px;
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  color: ${({ theme }) => theme.colors.TEXT_SECONDARY};
`;

export const LabelCard = styled(Text)<LabelCardProps>`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  color: ${({ theme }) => theme.colors.TEXT_PRIMARY};
  font-size: ${({ secondary }) => (secondary ? 18 : 60)}px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
`;
