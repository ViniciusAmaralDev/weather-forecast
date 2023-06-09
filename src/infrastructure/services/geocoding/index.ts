import { AxiosPromise } from "axios";
import { OPEN_WEATHER_MAP_KEY } from "@env";
import IGeocodingService from "./interfaces/IGeocodingService";
import { OpenWeatherMapAPI } from "infrastructure/http/OpenWeatherMapAPI";
import IGeocodingResponse from "./interfaces/response/IGeocodingResponse";
import IConvertCoordinatesToAddress from "./interfaces/request/IConvertCoordinatesToAddress";

export default class GeocodingService implements IGeocodingService {
  public async convertAddressToCoordinates(
    address: string
  ): AxiosPromise<IGeocodingResponse[]> {
    return OpenWeatherMapAPI.get(
      `/geo/1.0/direct?q=${address}&limit=1&appid=${OPEN_WEATHER_MAP_KEY}`
    );
  }

  public async convertCoordinatestoAddress({
    latitude,
    longitude,
  }: IConvertCoordinatesToAddress): AxiosPromise<IGeocodingResponse[]> {
    return OpenWeatherMapAPI.get(
      `/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${OPEN_WEATHER_MAP_KEY}`
    );
  }
}
