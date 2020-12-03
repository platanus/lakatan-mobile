import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as rafflesActions } from './slice';
import { actions as teamsActions } from '../Teams/slice';
import { actions as authActions } from '../authentication/slice';
import { CREATE_RAFFLE_REQUEST } from '../types';
import api from '../../api/raffles';

function *createRaffleRequest({ payload }) {
  yield put(rafflesActions.start());
  try {
    const response = yield call(api.createRaffle, payload);
    yield put(rafflesActions.setChosenOnes(response.data.data.attributes.users));
  } catch (error) {
    if (error.response.status.toString() === '401') {
      yield put(authActions.authError('¡Oops, hubo un error!'));
      yield put(rafflesActions.reset());
      yield put(teamsActions.reset());
      yield put(authActions.reset());
    } else console.log(error);
  }
  yield put(rafflesActions.finish());
}

export default function *rafflesSaga() {
  yield takeLatest(CREATE_RAFFLE_REQUEST, createRaffleRequest);
}
