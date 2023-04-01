import { Forecast } from "@hooks/forecast/types";
import { getRealm } from "infrastructure/offline/realm";
import IForecastOfflineService from "./interfaces/IForecastOfflineService";
import { forecastSchema } from "infrastructure/offline/realm/schemas/ForecastSchema";

export default class ForecastOfflineService implements IForecastOfflineService {
  public async deleteAll() {
    const realm = await getRealm();
    realm.write(() => {
      realm.delete(realm.objects(forecastSchema.name));
    });
  }

  public async getAll() {
    const realm = await getRealm();
    return realm.objects(forecastSchema.name) as any as Forecast[];
  }

  public async save(forecast: Forecast) {
    const realm = await getRealm();
    realm.write(() => {
      realm.create(forecastSchema.name, forecast);
    });
  }

  public async update(forecast: Forecast) {
    const realm = await getRealm();
    realm.write(() => {
      realm.create(forecastSchema.name, forecast, Realm.UpdateMode.Modified);
    });
  }
}
