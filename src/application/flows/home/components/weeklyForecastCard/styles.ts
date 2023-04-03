import Text from "@components/base/text";
import styled from "styled-components/native";

type LabelTempProps = { secondary?: boolean };
type HorizontalContainerProps = { showMarginBottom?: boolean };

export const Container = styled.View`
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Title = styled(Text)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  color: ${({ theme }) => theme.colors.TEXT_PRIMARY};
`;

export const Card = styled.View`
  padding: 8px 16px;
  border-radius: 12px;
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_SECONDARY};
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;

export const LabelCard = styled(Text)`
  flex: 1;
  font-size: 14px;
  margin: 0px 16px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.TEXT_PRIMARY};
`;

export const HorizontalContainer = styled.View<HorizontalContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ showMarginBottom }) => (showMarginBottom ? 16 : 0)}px;
`;

export const LabelTemp = styled(Text)<LabelTempProps>`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  margin-left: ${({ secondary }) => (secondary ? 8 : 0)}px;
  font-size: ${({ secondary }) => (secondary ? 12 : 14)}px;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.TEXT_TERTIARY : theme.colors.TEXT_PRIMARY};
`;
