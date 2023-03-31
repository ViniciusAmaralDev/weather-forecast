import { AxiosPromise } from "axios";
import { OPEN_WEATHER_MAP_KEY } from "@env";
import IGeocodingService from "./interfaces/IGeocodingService";
import { OpenWeatherMapAPI } from "infrastructure/http/OpenWeatherMapAPI";
import IConvertAddressToCoordinatesResponse from "./interfaces/response/IConvertAddressToCoordinatesResponse";

export default class GeocodingService implements IGeocodingService {
  public async convertAddressToCoordinates(
    address: string
  ): AxiosPromise<IConvertAddressToCoordinatesResponse[]> {
    return OpenWeatherMapAPI.get(
      `/geo/1.0/direct?q=${address}&limit=1&appid=${OPEN_WEATHER_MAP_KEY}`
    );
  }
}
