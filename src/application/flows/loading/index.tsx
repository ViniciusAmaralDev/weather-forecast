import React, { useEffect } from "react";
import { useForecast } from "@hooks/forecast";
import { Container, Animation } from "./styles";
import { MainStackRootProps } from "application/routes/types/MainStack";
import { MainScreensScreensEnum } from "application/routes/enums/MainStackEnum";

const Loading = ({
  navigation,
}: MainStackRootProps<MainScreensScreensEnum.LOADING>) => {
  const { forecast } = useForecast();

  useEffect(() => {
    if (forecast) navigation.navigate(MainScreensScreensEnum.HOME);
  }, [forecast]);

  return (
    <Container>
      <Animation />
    </Container>
  );
};

export default Loading;
