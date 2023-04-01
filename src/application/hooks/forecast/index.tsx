import { Children } from "../../../@types/Children";
import { Forecast, ForecastContext } from "./types";
import ForecastHttpService from "infrastructure/services/forecast/http";
import React, { createContext, useContext, useEffect, useState } from "react";
import IGetForecastRequest from "infrastructure/services/forecast/http/interfaces/request/IGetForecastRequest";
import { useLocation } from "@hooks/location";

const Context = createContext({} as ForecastContext);

export const ForecastProvider = ({ children }: Children) => {
  const { location } = useLocation();
  const httpService = new ForecastHttpService();

  const [forecast, setForecast] = useState<Forecast>();

  const getForecast = async (values: IGetForecastRequest) => {
    try {
      const { data } = await httpService.get(values);
      setForecast(data);
    } catch (error: any) {
      throw error;
    }
  };

  useEffect(() => {
    // getForecast({
    //   latitude: location.lat,
    //   longitude: location.lon,
    // });
  }, [location]);

  return (
    <Context.Provider value={{ forecast, getForecast }}>
      {children}
    </Context.Provider>
  );
};

export const useForecast = () => useContext(Context);
