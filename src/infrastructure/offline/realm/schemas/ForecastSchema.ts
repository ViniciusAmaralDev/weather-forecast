import { ObjectSchema } from "realm";

export const weatherEmbedded: ObjectSchema = {
  embedded: true,
  name: "WeatherEmbedded",
  properties: {
    id: "int",
    main: "string",
    icon: "string",
    description: "string",
  },
};

export const feelsLikeEmbedded: ObjectSchema = {
  embedded: true,
  name: "FeelsLikeEmbedded",
  properties: {
    day: "int",
    eve: "int",
    morn: "int",
    night: "int",
  },
};

export const tempEmbedded: ObjectSchema = {
  embedded: true,
  name: "TempEmbedded",
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
    rain: { type: "dictionary", objectType: "double" },
    weather: { objectType: "WeatherEmbedded", type: "list", default: [] },
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
    tags: { objectType: "string", type: "list", default: [] },
  },
};

export const hourlyEmbedded: ObjectSchema = {
  embedded: true,
  name: "HourlyEmbedded",
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
    rain: { type: "dictionary", objectType: "double" },
    weather: { objectType: "WeatherEmbedded", type: "list", default: [] },
  },
};

export const currentEmbedded: ObjectSchema = {
  embedded: true,
  name: "CurrentEmbedded",
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
    weather: { objectType: "WeatherEmbedded", type: "list", default: [] },
  },
};

export const minutelyEmbedded: ObjectSchema = {
  embedded: true,
  name: "MinutelyEmbedded",
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
    isSelected: "bool",
    timezone: "string",
    timezone_offset: "int",
    current: "CurrentEmbedded",
    daily: { objectType: "DailyEmbedded", type: "list", default: [] },
    alerts: { objectType: "AlertsEmbedded", type: "list", default: [] },
    hourly: { objectType: "HourlyEmbedded", type: "list", default: [] },
    minutely: { objectType: "MinutelyEmbedded", type: "list", default: [] },
  },
};
