import Button from "@components/base/button";
import Text from "@components/base/text";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 24px;
`;

export const Card = styled.View`
  padding: 8px;
  margin: 4px 0px;
  margin-right: 8px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_SECONDARY};
`;

export const Title = styled(Text)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
`;

export const HorizontalContainer = styled.View`
  padding: 0px 16px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HorizontalScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 16 },
})``;

export const CardLabel = styled(Text)`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
`;
