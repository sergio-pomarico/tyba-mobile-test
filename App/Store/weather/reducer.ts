import { WeatherActionsType } from './actions.type';
import { Action } from '../../Interfaces/types';
import { Weather } from '../../Interfaces/models';

export interface WeatherDataState {
  loading: boolean;
  weather: Weather | undefined;
  error: string;
}

const initialState: WeatherDataState = {
  loading: false,
  weather: undefined,
  error: ''
};

export default function weatherReducer(
  state: WeatherDataState = initialState,
  action: Action
): WeatherDataState {
  switch (action.type) {
    case WeatherActionsType.GET_WEATHER_BY_CITY: {
      return { ...state, loading: true };
    }
    case WeatherActionsType.GET_WEATHER_BY_CITY_SUCCESS: {
      const { weather } = action;
      return { ...state, loading: false, weather, error: '' };
    }

    case WeatherActionsType.GET_WEATHER_BY_CITY_FAILURE: {
      const { error } = action;
      return { ...state, loading: false, error };
    }
    default:
      return state;
  }
}
