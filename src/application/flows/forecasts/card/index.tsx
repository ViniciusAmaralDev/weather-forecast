import React from "react";
import {
  Container,
  Header,
  HorizontalContainer,
  HeaderBadge,
  Badge,
  BadgeText,
  Label,
  VerticalDivider,
  PinIcon,
  VerticalContainer,
  Image,
  ClockIcon,
} from "./styles";
import { Forecast } from "@hooks/forecast/types";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Shadow from "@flows/utils/Shadow";

type Props = { forecast: Forecast };

const Card = ({ forecast }: Props) => {
  return (
    <Container style={{...Shadow}}>
      <Header>
        <Label secondary>
          {format(new Date(forecast.current.dt * 1000), "EEEEEE dd, MMMM", {
            locale: ptBR,
          })}
        </Label>

        <HeaderBadge>
          <PinIcon />
          <BadgeText>{forecast.timezone}</BadgeText>
        </HeaderBadge>
      </Header>

      <HorizontalContainer>
        <Label>{Math.round(forecast.current.temp)}°C</Label>

        <VerticalDivider />

        <VerticalContainer>
          <HorizontalContainer>
            <Image
              source={{
                uri: `https://openweathermap.org/img/wn/${forecast.current.weather[0].icon}.png`,
              }}
            />
            <Label secondary>{forecast.current.weather[0].description}</Label>
          </HorizontalContainer>

          <HorizontalContainer>
            <ClockIcon />
            <Label secondary>
              {format(new Date(forecast.current.dt * 1000), "HH:mm")}
            </Label>
          </HorizontalContainer>
        </VerticalContainer>
      </HorizontalContainer>
    </Container>
  );
};

export default Card;
