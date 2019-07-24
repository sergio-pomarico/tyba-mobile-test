import { call, put, takeLatest } from '@redux-saga/core/effects';

import { WeatherActionsType } from './actions.type';
import { getWeatherByCityFailure, getWeatherByCitySuccess } from './actions';
import { Action } from '../../Interfaces/types';
import Requester from '../../Shared/Utils/Requester';

export function* getWeatherByCityCoord(action: Action): IterableIterator<any> {
  try {
    const { coords } = action;
    const { data, status } = yield call(
      Requester.getInstance().getCityNameByCords,
      coords
    );

    if (status === 200) {
      const result = data.results[0].components;
      const { city } = result;
      const wheater = yield call(
        Requester.getInstance().getWeatherByCityName,
        city
      );

      const wheaterStatus = wheater.status;
      if (wheaterStatus === 200) {
        const wheaterData = wheater.data;
        yield put(getWeatherByCitySuccess(wheaterData));
      } else {
        yield put(getWeatherByCityFailure('error'));
      }
    } else {
      yield put(getWeatherByCityFailure('error'));
    }
  } catch (error) {
    if (/404/.exec(error)) {
      yield put(getWeatherByCityFailure('NOT_FOUND'));
    } else {
      yield put(getWeatherByCityFailure(error));
    }
  }
}

export const weatherSaga = [
  takeLatest(
    WeatherActionsType.GET_WEATHER_BY_CITY_CORDS,
    getWeatherByCityCoord
  )
];
