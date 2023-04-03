import Text from "@components/base/text";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

type Props = { secondary?: boolean };

export const Container = styled.View`
  padding: 8px 16px;
  margin-bottom: 16px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_SECONDARY};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderBadge = styled.View<Props>`
  padding: 6px 8px;
  flex-direction: row;
  align-items: center;
  border-radius: 100px;
`;

export const VerticalContainer = styled.View`
`;

export const HorizontalContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled(Text)<Props>`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: ${({ secondary }) => (secondary ? 12 : 50)}px;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.TEXT_TERTIARY : theme.colors.TEXT_PRIMARY};
  text-transform: ${({ secondary }) => (secondary ? "capitalize" : "none")};
`;

export const Badge = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  padding: ${({ secondary }) => (secondary ? 0 : 8)}px;
  background-color: ${({ theme, secondary }) =>
    secondary ? "transparent" : theme.colors.TEXT_TERTIARY};
`;

export const BadgeText = styled(Text)`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  color: ${({ theme }) => theme.colors.TEXT_TERTIARY};
`;

export const VerticalDivider = styled.View`
  height: 70%;
  margin: 0px 16px;
  border-right-width: 0.5px;
  border-right-color: ${({ theme }) => theme.colors.TEXT_SECONDARY};
`;

export const Image = styled.Image`
  width: 35px;
  height: 35px;
  margin-left: -8px;
`;

export const PinIcon = styled(Feather).attrs(({ theme }) => ({
  size: 15,
  name: "map-pin",
  color: theme.colors.TEXT_TERTIARY,
}))`
  margin-right: 8px;
`;

export const ClockIcon = styled(Feather).attrs(({ theme }) => ({
  size: 20,
  name: "clock",
  color: theme.colors.TEXT_SECONDARY,
}))`
  margin-right: 8px;
`;
