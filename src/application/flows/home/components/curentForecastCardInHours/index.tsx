import React from "react";
import {
  Container,
  HorizontalContainer,
  Title,
  Card,
  CardLabel,
  HorizontalScroll,
  Image,
} from "./styles";
import { Hourly } from "@hooks/forecast/types";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Shadow from "@flows/utils/Shadow";

type Props = { hourly: Hourly[] };

const CurrentForecastCardInHours = ({ hourly }: Props) => {
  const CardItem = ({ data }: { data: Hourly }) => {
    return (
      <Card style={{ ...Shadow }}>
        <CardLabel>
          {format(new Date(data.dt * 1000), "HH:00", { locale: ptBR })}
        </CardLabel>

        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          }}
        />

        <CardLabel>{Math.round(data.temp)}°C</CardLabel>
      </Card>
    );
  };

  return (
    <Container>
      <HorizontalContainer>
        <Title>Hoje</Title>
      </HorizontalContainer>

      <HorizontalScroll>
        {hourly.map((item, index) => (
          <CardItem key={index} data={item as Hourly} />
        ))}
      </HorizontalScroll>
    </Container>
  );
};

export default CurrentForecastCardInHours;
