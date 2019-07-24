import { WeatherActionsType } from './actions.type';
import { Weather } from '../../Interfaces/models';

export const getWeatherByCityCoord = (latitude: number, longitude: number) => ({
  coords: { latitude, longitude },
  type: WeatherActionsType.GET_WEATHER_BY_CITY_CORDS
});

export const getWeatherByCitySuccess = (weather: Weather) => ({
  weather,
  type: WeatherActionsType.GET_WEATHER_BY_CITY_SUCCESS
});

// Handle errors
export const getWeatherByCityFailure = (error: string) => ({
  type: WeatherActionsType.GET_WEATHER_BY_CITY_FAILURE,
  error
});
