import React from "react";
import Header from "@components/header";
import { ThemeModeEnum } from "@hooks/settings/type";
import {
  Container,
  VerticalContainer,
  ThemeModeButton,
  ThemeModeIcon,
  Card,
  TitleCard,
  LabelCard,
  Image,
} from "./styles";
import { Forecast } from "@hooks/forecast/types";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

type Props = {
  forecast: Forecast;
  themeMode: ThemeModeEnum;
  toggleThemeMode: () => void;
};

const HomeLayout = ({ forecast, themeMode, toggleThemeMode }: Props) => {
  const themeModeIconName = themeMode === ThemeModeEnum.LIGHT ? "moon" : "sun";

  const date = format(new Date(forecast?.current?.dt * 1000), "E, dd MMMM", {
    locale: ptBR,
  });

  console.log(forecast.current);

  return (
    <Container
      header={
        <Header
          title="Weather Forecast"
          leftContainer={<></>}
          rightContainer={
            <ThemeModeButton onPress={toggleThemeMode}>
              <ThemeModeIcon name={themeModeIconName} />
            </ThemeModeButton>
          }
        />
      }
    >
      <Card>
        <VerticalContainer>
          <TitleCard>{date}</TitleCard>
          <LabelCard>{Math.round(forecast?.current.temp)}°C</LabelCard>
          <LabelCard secondary>
            {forecast?.current.weather[0].description}
          </LabelCard>
        </VerticalContainer>

        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${forecast.current.weather[0].icon}@2x.png`,
          }}
        />
      </Card>
    </Container>
  );
};

export default HomeLayout;
