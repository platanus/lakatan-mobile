import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as ritesActions } from './slice';
import { CREATE_RITE_REQUEST, MAKE_RAFFLE_REQUEST } from '../types';
import ritesApi from '../../api/rites';

function* createRiteRequest({ payload }) {
  yield put(ritesActions.start());
  try {
    yield call(ritesApi.createRite, payload);
  } catch (error) {
    console.log(error);
  }
  yield put(ritesActions.finish());
}

function* makeRaffleRequest({ payload }) {
  yield put(ritesActions.start());
  try {
    const data = yield call(ritesApi.makeRaffleApi, payload);
    if (data.data) {
      console.log("respond", data.data)
    }
    yield put(ritesActions.setChosenOnes(data.data));
  } catch (error) {
    yield put(ritesActions.setChosenOnes([]));
    console.log('erro', error);
  }
  yield put(ritesActions.finish());
}

export default function* ritesSaga() {
  yield takeLatest(CREATE_RITE_REQUEST, createRiteRequest);
  yield takeLatest(MAKE_RAFFLE_REQUEST, makeRaffleRequest);
}
