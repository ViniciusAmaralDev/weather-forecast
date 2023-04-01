import Realm from "realm";
import { schema } from "./schemas";

export const getRealm = async () =>
  Realm.open({
    schema,
    schemaVersion: 1,
    path: "weather-forecast",
  });
