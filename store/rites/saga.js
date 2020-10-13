import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as ritesActions } from './slice';
import { CREATE_RITE_REQUEST } from '../types';
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



export default function* ritesSaga() {
  yield takeLatest(CREATE_RITE_REQUEST, createRiteRequest);
}
