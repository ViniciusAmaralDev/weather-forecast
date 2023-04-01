import Lottie from "lottie-react-native";
import styled from "styled-components/native";
import loadingAnimation from "@assets/animations/loading-animation.json";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BACKGROUND_PRIMARY};
`;

export const Animation = styled(Lottie).attrs({
  loop: true,
  autoPlay: true,
  source: loadingAnimation,
})`
  width: 200px;
  height: 200px;
`;
