import Card from "./card";
import React, { useState } from "react";
import Header from "@components/header";
import { Forecast } from "@hooks/forecast/types";
import {
  Container,
  SearchBar,
  FlatList,
  AddButton,
  AddButtonText,
} from "./styles";
import IGetForecastRequest from "infrastructure/services/forecast/http/interfaces/request/IGetForecastRequest";

type Props = {
  forecasts: Forecast[];
  handleGetForecast: (value: string) => Promise<void>;
};

const ForecastsLayout = ({ forecasts, handleGetForecast }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const filtered = forecasts.filter((item) =>
    item.timezone.includes(inputValue)
  );

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
      <FlatList
        data={filtered}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Card forecast={item as Forecast} />}
        ListEmptyComponent={() => (
          <AddButton
            onPress={async () => {
              await handleGetForecast(inputValue);
              setInputValue("");
            }}
          >
            <AddButtonText>Buscar</AddButtonText>
          </AddButton>
        )}
      />
    </Container>
  );
};

export default ForecastsLayout;
