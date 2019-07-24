import { put, takeLatest } from '@redux-saga/core/effects';
import firebase from 'react-native-firebase';

import { AuthActionsType } from './actions.type';
import { authError } from './actions';
import { Action } from '../../Interfaces/types';
import { getUserSuccess, getUserError } from '../users/actions';
import NavigationService from '../../Navigation/navigationService';

export function* signin(action: Action): IterableIterator<any> {
  try {
    const { email, password } = action;
    const { user } = yield firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (user) {
      yield put(getUserSuccess(user));
      NavigationService.navigate('Home');
    } else {
      yield put(getUserError('error'));
    }
  } catch (error) {
    yield put(authError(error));
  }
}

export function* login(action: Action): IterableIterator<any> {
  try {
    const { email, password } = action;
    const { user } = yield firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    if (user) {
      yield put(getUserSuccess(user));
      NavigationService.navigate('Home');
    } else {
      yield put(getUserError('error'));
    }
  } catch (error) {
    yield put(authError(error));
  }
}

export const authSaga = [
  takeLatest(AuthActionsType.SIGN_IN_USER, signin),
  takeLatest(AuthActionsType.LOG_IN_USER, login)
];
