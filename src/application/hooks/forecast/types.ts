import IGetForecastRequest from "infrastructure/services/forecast/http/interfaces/request/IGetForecastRequest";
import IGetForecastResponse from "infrastructure/services/forecast/http/interfaces/response/IGetForecastResponse";

export type Forecast = IGetForecastResponse;

export type ForecastContext = {
  forecast: Forecast;
  getForecast: (values: IGetForecastRequest) => Promise<void>;
};
