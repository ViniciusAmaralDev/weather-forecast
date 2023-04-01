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
  const [selecetdForecast, setSelectedForecast] = useState<Forecast>();

  const getForecast = async (values: IGetForecastRequest) => {
    if (!isConnected) return;
    try {
      const { data } = await httpService.get(values);
      setForecasts((values) => [...values, data]);
      await offlineService.save(data);
      return data;
    } catch (error: any) {
      throw error;
    }
  };

  const getMyLocationForecast = async () => {
    if (!location) return;
    try {
      const { lat: latitude, lon: longitude } = location;
      const forecast = await getForecast({ latitude, longitude });
      setSelectedForecast(forecast);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getMyLocationForecast();
  }, [location]);

  useEffect(() => {
    (async () => {
      const forecasts = await offlineService.getAll();
      setForecasts(forecasts);
    })();
  }, []);

  return (
    <Context.Provider
      value={{
        forecasts,
        selecetdForecast,
        getForecast,
        getMyLocationForecast,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useForecast = () => useContext(Context);
