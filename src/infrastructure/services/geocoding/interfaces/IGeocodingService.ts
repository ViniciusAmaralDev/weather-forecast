import { AxiosPromise } from "axios";
import IConvertAddressToCoordinatesResponse from "./response/IConvertAddressToCoordinatesResponse";

export default interface IGeocodingService {
  convertAddressToCoordinates: (address: string) => AxiosPromise<
    IConvertAddressToCoordinatesResponse[]
  >;
}
