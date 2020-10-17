import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as rafflesActions } from './slice';
import { CREATE_RAFFLE_REQUEST } from '../types';
import api from '../../api/raffles';

function *createRaffleRequest({ payload }) {
  yield put(rafflesActions.start());
  try {
    const data = yield call(api.createRaffle, payload);
    yield put(rafflesActions.setChosenOnes(data.data));
  } catch (error) {
    yield put(rafflesActions.setChosenOnes([]));
    console.log('error', error);
  }
  yield put(rafflesActions.finish());
}

export default function *rafflesSaga() {
  yield takeLatest(CREATE_RAFFLE_REQUEST, createRaffleRequest);
}
