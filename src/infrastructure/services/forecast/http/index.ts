import { AxiosPromise } from "axios";
import { OPEN_WEATHER_MAP_KEY } from "@env";
import { Forecast } from "@hooks/forecast/types";
import IForecastHttpService from "./interfaces/IForecastHttpService";
import { OpenWeatherMapAPI } from "infrastructure/http/OpenWeatherMapAPI";
import IGetForecastRequest from "./interfaces/request/IGetForecastRequest";

export default class ForecastHttpService implements IForecastHttpService {
  public async get({
    latitude,
    longitude,
  }: IGetForecastRequest): AxiosPromise<Forecast> {
    return OpenWeatherMapAPI.get(
      `/data/3.0/onecall?lat=${latitude}&lon=${longitude}&lang=pt_br&units=metric&appid=${OPEN_WEATHER_MAP_KEY}`
    );
  }
}
