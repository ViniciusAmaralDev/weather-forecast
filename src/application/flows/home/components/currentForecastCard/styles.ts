import Text from "@components/base/text";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

type LabelCardProps = { secondary?: boolean };

export const Container = styled.View`
  margin: 16px;
  padding: 16px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_SECONDARY};
`;

export const VerticalContainer = styled.View``;

export const HorizontalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  font-size: 14px;
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  color: ${({ theme }) => theme.colors.TEXT_LIGHT};
`;

export const Label = styled(Text)<LabelCardProps>`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  color: ${({ theme }) => theme.colors.TEXT_PRIMARY};
  font-size: ${({ secondary }) => (secondary ? 18 : 60)}px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Badge = styled.View`
  margin-top: 24px;
  padding: 4px 8px;
  flex-direction: row;
  align-items: center;
  border-radius: 100px;
  justify-content: center;
`;

export const BadgeText = styled(Text)`
  font-size: 12px;
  margin-left: 8px;
  /* font-family: ${({ theme }) => theme.fonts.MEDIUM}; */
  color: ${({ theme }) => theme.colors.TEXT_LIGHT};
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.TEXT_LIGHT,
}))``;
