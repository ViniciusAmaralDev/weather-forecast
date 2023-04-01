import { ObjectSchema } from "realm";

export const weatherEmbedded: ObjectSchema = {
  name: "WeatherEmbedded",
  embedded: true,
  properties: {
    id: "int",
    main: "string",
    description: "string",
    icon: "string",
  },
};

export const feelsLikeEmbedded: ObjectSchema = {
  name: "FeelsLikeEmbedded",
  embedded: true,
  properties: {
    day: "int",
    night: "int",
    eve: "int",
    morn: "int",
  },
};

export const tempEmbedded: ObjectSchema = {
  name: "TempEmbedded",
  embedded: true,
  properties: {
    day: "int",
    min: "int",
    max: "int",
    eve: "int",
    morn: "int",
    night: "int",
  },
};

export const dailyEmbedded: ObjectSchema = {
  name: "DailyEmbedded",
  embedded: true,
  properties: {
    dt: "int",
    pop: "int",
    uvi: "int",
    rain: "int",
    clouds: "int",
    sunset: "int",
    sunrise: "int",
    moonset: "int",
    moonrise: "int",
    pressure: "int",
    humidity: "int",
    wind_deg: "int",
    dew_point: "int",
    wind_gust: "int",
    moon_phase: "int",
    wind_speed: "int",
    temp: "TempEmbedded",
    feels_like: "FeelsLikeEmbedded",
    weather: { type: "WeatherEmbedded", objectType: "list", default: [] },
  },
};

export const alertsEmbedded: ObjectSchema = {
  name: "AlertsEmbedded",
  embedded: true,
  properties: {
    end: "int",
    start: "int",
    event: "string",
    sender_name: "string",
    description: "string",
    tags: { type: "string", objectType: "list", default: [] },
  },
};

export const hourlyEmbedded: ObjectSchema = {
  name: "HourlyEmbedded",
  embedded: true,
  properties: {
    dt: "int",
    uvi: "int",
    pop: "int",
    temp: "int",
    clouds: "int",
    pressure: "int",
    humidity: "int",
    wind_deg: "int",
    dew_point: "int",
    wind_gust: "int",
    feels_like: "int",
    visibility: "int",
    wind_speed: "int",
    rain: "dictionary",
    weather: { type: "WeatherEmbedded", objectType: "list", default: [] },
  },
};

export const currentEmbedded: ObjectSchema = {
  name: "CurrentEmbedded",
  embedded: true,
  properties: {
    dt: "int",
    uvi: "int",
    temp: "int",
    clouds: "int",
    sunset: "int",
    sunrise: "int",
    pressure: "int",
    humidity: "int",
    wind_deg: "int",
    dew_point: "int",
    feels_like: "int",
    visibility: "int",
    wind_speed: "int",
    weather: { type: "WeatherEmbedded", objectType: "list", default: [] },
  },
};

export const minutelyEmbedded: ObjectSchema = {
  name: "MinutelyEmbedded",
  embedded: true,
  properties: {
    dt: "int",
    precipitation: "int",
  },
};

export const forecastSchema: ObjectSchema = {
  name: "Forecast",
  properties: {
    lat: "int",
    lon: "int",
    timezone: "string",
    timezone_offset: "int",
    daily: { type: "DailyEmbedded", objectType: "list", default: [] },
    alerts: { type: "AlertsEmbedded", objectType: "list", default: [] },
    hourly: { type: "HourlyEmbedded", objectType: "list", default: [] },
    current: { type: "CurrentEmbedded", objectType: "list", default: [] },
    minutely: { type: "MinutelyEmbedded", objectType: "list", default: [] },
  },
};
