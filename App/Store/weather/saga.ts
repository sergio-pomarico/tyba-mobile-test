import { call, put, takeLatest } from '@redux-saga/core/effects';

import { WeatherActionsType } from './actions.type';
import { getWeatherByCityFailure, getWeatherByCitySuccess } from './actions';
import { Action } from '../../Interfaces/types';
import Requester from '../../Shared/Utils/Requester';

export function* readWeatherByCityName(action: Action): IterableIterator<any> {
  try {
    const { cityName } = action;
    const { data, status } = yield call(
      Requester.getInstance().getWeatherByCityName,
      cityName
    );

    if (status === 200) {
      yield put(getWeatherByCitySuccess(data));
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
  takeLatest(WeatherActionsType.GET_WEATHER_BY_CITY, readWeatherByCityName)
];
