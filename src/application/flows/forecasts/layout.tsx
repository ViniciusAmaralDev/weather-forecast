import Card from "./card";
import React, { useState } from "react";
import Header from "@components/header";
import { Forecast } from "@hooks/forecast/types";
import { Container, SearchBar } from "./styles";

type Props = { forecasts: Forecast[] };

const ForecastsLayout = ({ forecasts }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const filtered = forecasts.filter(item => item.timezone.includes(inputValue))

  return (
    <Container
      header={
        <>
          <Header title="Previsões" leftContainer={<></>} />
          <SearchBar
            placeholder="pesquisar"
            onChangeText={setInputValue}
            handleClear={() => setInputValue("")}
          />
        </>
      }
    >
      {filtered.map((item, index) => (
        <Card
          key={index}
          current={item.current}
          location={forecasts[0].timezone}
        />
      ))}
    </Container>
  );
};

export default ForecastsLayout;
