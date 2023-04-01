import { Forecast } from "@hooks/forecast/types";

export default interface IForecastOfflineService {
  deleteAll: () => Promise<void>;
  getAll: () => Promise<Forecast[]>;
  save: (forecast: Forecast) => Promise<void>;
  update: (forecast: Forecast) => Promise<void>;
}
