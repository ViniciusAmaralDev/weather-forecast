import { useLocation } from "@hooks/location";
import { Children } from "../../../@types/Children";
import { Forecast, ForecastContext } from "./types";
import { useNetInfo } from "@react-native-community/netinfo";
import ForecastHttpService from "infrastructure/services/forecast/http";
import React, { createContext, useContext, useEffect, useState } from "react";
import ForecastOfflineService from "infrastructure/services/forecast/offline";
import IGetForecastRequest from "infrastructure/services/forecast/http/interfaces/request/IGetForecastRequest";

const Context = createContext({} as ForecastContext);

export const ForecastProvider = ({ children }: Children) => {
  const { location } = useLocation();
  const { isConnected } = useNetInfo();

  const httpService = new ForecastHttpService();
  const offlineService = new ForecastOfflineService();

  const [forecasts, setForecasts] = useState<Forecast[]>([]);

  const getForecast = async (values: IGetForecastRequest) => {
    if (!isConnected) return;
    try {
      const { data } = await httpService.get(values);
      const find = forecasts.find(({ timezone }) => timezone === data.timezone);
      if (find) {
        const forecast = { ...data, isSelected: find.isSelected };
        setForecasts((values) =>
          values.map((item) => {
            if (item.timezone === data.timezone) return forecast;
            else return item;
          })
        );
        await offlineService.update(forecast);
      } else {
        const forecast = { ...data, isSelected: forecasts.length === 0 };
        setForecasts((values) => [...values, forecast]);
        await offlineService.save(forecast);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const getMyLocationForecast = async () => {
    if (!location) return;
    await getForecast({ latitude: location.lat, longitude: location.lon });
    try {
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    (async () => {
      const offlineForecasts = await offlineService.getAll();
      setForecasts(offlineForecasts);
    })();
  }, []);

  useEffect(() => {
    if (forecasts.length === 0) getMyLocationForecast();
  }, [location]);

  return (
    <Context.Provider
      value={{
        forecasts,
        getForecast,
        getMyLocationForecast,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useForecast = () => useContext(Context);
