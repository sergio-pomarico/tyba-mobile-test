import { WeatherActionsType } from './actions.type';
import { Action } from '../../Interfaces/types';
import { Weather } from '../../Interfaces/models';

export interface WeatherDataState {
  weather: Weather | undefined;
  error: string;
}

const initialState: WeatherDataState = {
  weather: undefined,
  error: ''
};

export default function weatherReducer(
  state: WeatherDataState = initialState,
  action: Action
): WeatherDataState {
  switch (action.type) {
    case WeatherActionsType.GET_WEATHER_BY_CITY_CORDS: {
      return { ...state };
    }
    case WeatherActionsType.GET_WEATHER_BY_CITY_SUCCESS: {
      const { weather } = action;
      return { ...state, weather, error: '' };
    }

    case WeatherActionsType.GET_WEATHER_BY_CITY_FAILURE: {
      const { error } = action;
      return { ...state, error };
    }
    default:
      return state;
  }
}
