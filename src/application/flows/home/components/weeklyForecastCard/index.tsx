import React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Daily } from "@hooks/forecast/types";
import {
  Container,
  Title,
  Card,
  Image,
  LabelCard,
  HorizontalContainer,
  LabelTemp,
} from "./styles";
import Shadow from "@flows/utils/Shadow";

type Props = { forecast: Daily[] };

const WeeklyForecastCard = ({ forecast }: Props) => {
  return (
    <Container>
      <HorizontalContainer showMarginBottom>
        <Title>Semana</Title>
      </HorizontalContainer>

      {forecast.map((item, index) => (
        <Card key={index} style={{ ...Shadow }}>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
            }}
          />

          <LabelCard>
            {format(new Date(item.dt * 1000), "E, d MMMM", { locale: ptBR })}
          </LabelCard>

          <HorizontalContainer>
            <LabelTemp>{Math.round(item.temp.max)}°C</LabelTemp>
            <LabelTemp secondary>{Math.round(item.temp.min)}°C</LabelTemp>
          </HorizontalContainer>
        </Card>
      ))}
    </Container>
  );
};

export default WeeklyForecastCard;
