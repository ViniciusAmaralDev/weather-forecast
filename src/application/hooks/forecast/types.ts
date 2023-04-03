import IGetForecastRequest from "infrastructure/services/forecast/http/interfaces/request/IGetForecastRequest";

type Default = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: { id: number; main: string; description: string; icon: string }[];
};

export type Current = Default & {
  sunrise: number;
  sunset: number;
};

export type Minutely = { dt: number; precipitation: number };

export type Hourly = Default & {
  wind_gust: number;
  pop: number;
  rain: Record<string, number>;
};

export type Daily = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: { day: number; night: number; eve: number; morn: number };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
};

type Alert = {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
}[];

export type Forecast = {
  lat: number;
  lon: number;
  daily: Daily[];
  alerts: Alert[];
  timezone: string;
  current: Current;
  hourly: Hourly[];
  isSelected: boolean;
  minutely: Minutely[];
  timezone_offset: number;
}

export type ForecastContext = {
  forecasts: Forecast[];
  getMyLocationForecast: () => Promise<void>;
  getForecast: (values: IGetForecastRequest) => Promise<void>;
};
