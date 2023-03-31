import { AxiosPromise } from "axios";
import IGetForecastRequest from "./request/IGetForecastRequest";
import IGetForecastResponse from "./response/IGetForecastResponse";

export default interface IForecastHttpService {
  get: (values: IGetForecastRequest) => AxiosPromise<IGetForecastResponse>;
}
