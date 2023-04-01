import { AxiosPromise } from "axios";
import { Forecast } from "@hooks/forecast/types";
import IGetForecastRequest from "./request/IGetForecastRequest";

export default interface IForecastHttpService {
  get: (values: IGetForecastRequest) => AxiosPromise<Forecast>;
}
