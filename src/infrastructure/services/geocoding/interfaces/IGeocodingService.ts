import { AxiosPromise } from "axios";
import IGeocodingResponse from "./response/IGeocodingResponse";
import IConvertCoordinatesToAddress from "./request/IConvertCoordinatesToAddress";

export default interface IGeocodingService {
  convertAddressToCoordinates: (
    address: string
  ) => AxiosPromise<IGeocodingResponse[]>;

  convertCoordinatestoAddress: (
    values: IConvertCoordinatesToAddress
  ) => AxiosPromise<IGeocodingResponse[]>;
}
