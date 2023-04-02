import React from "react";
import {
  Container,
  Title,
  HorizontalContainer,
  VerticalContainer,
  Label,
  Image,
  Badge,
  Icon,
  BadgeText,
} from "./styles";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Current } from "@hooks/forecast/types";

type Props = { current: Current; };

const CurrentForecastCard = ({ current }: Props) => {
  return (
    <Container>
      <Title>
        {format(new Date(current.dt * 1000), "E, dd MMMM", {
          locale: ptBR,
        })}
      </Title>

      <HorizontalContainer>
        <VerticalContainer>
          <Label>{Math.round(current.temp)}°C</Label>
          <Label secondary>{current.weather[0].description}</Label>
        </VerticalContainer>

        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
          }}
        />
      </HorizontalContainer>

      <HorizontalContainer>
        <Badge>
          <Icon name="cloud-rain" />
          <BadgeText>{current.humidity}%</BadgeText>
        </Badge>

        <Badge>
          <Icon name="wind" />
          <BadgeText>{Math.round(current.wind_speed)} m/s</BadgeText>
        </Badge>

        <Badge>
          <Icon name="sunrise" />
          <BadgeText>{format(new Date(current.sunrise), "HH:mm")}</BadgeText>
        </Badge>

        <Badge>
          <Icon name="sunset" />
          <BadgeText>{format(new Date(current.sunset), "HH:mm")}</BadgeText>
        </Badge>
      </HorizontalContainer>
    </Container>
  );
};

export default CurrentForecastCard;
