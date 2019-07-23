export interface User {
  uid?: string;
  name?: string;
  email: string;
}

export interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface Weather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherInfo[];
  base: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  cod: number;
}
