import React from "react";
import { isToday } from "date-fns";
import Header from "@components/header";
import { Forecast } from "@hooks/forecast/types";
import { ThemeModeEnum } from "@hooks/settings/type";
import WeeklyForecastCard from "./components/weeklyForecastCard";
import CurrentForecastCard from "./components/currentForecastCard";
import { Container, ThemeModeButton, ThemeModeIcon } from "./styles";
import CurrentForecastCardInHours from "./components/curentForecastCardInHours";

type Props = {
  forecast: Forecast;
  themeMode: ThemeModeEnum;
  toggleThemeMode: () => void;
};

const HomeLayout = ({ forecast, themeMode, toggleThemeMode }: Props) => {
  const themeModeIconName = themeMode === ThemeModeEnum.LIGHT ? "moon" : "sun";

  const hourly = forecast?.hourly?.filter((item) =>
    isToday(new Date(item.dt * 1000))
  );

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
      {forecast && (
        <>
          <CurrentForecastCard current={forecast?.current} />
          <CurrentForecastCardInHours hourly={hourly} />
          <WeeklyForecastCard forecast={forecast?.daily} />
        </>
      )}
    </Container>
  );
};

export default HomeLayout;
