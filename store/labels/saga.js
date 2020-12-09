import { call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_ALL_LABELS_REQUEST,
  GET_USER_LABELS_REQUEST,
} from '../types';
import api from '../../api/labels';
import { actions as labelsActions } from './slice';

function *getAllLabelsRequest() {
  yield put(labelsActions.start());
  try {
    const respond = yield call(api.getAllLabelsApi);
    yield put(labelsActions.getAllLabels(respond.data.data));
  } catch (error) {
    console.log(error);
  }
  yield put(labelsActions.finish());
}

function *getUserLabelsRequest({ payload }) {
  yield put(labelsActions.start());
  try {
    const respond = yield call(api.getUserLabelsApi, payload);
    yield put(labelsActions.getUserLabels(respond.data.data));
  } catch (error) {
    console.log(error);
  }
  yield put(labelsActions.finish());
}

export default function *authenticactionSaga() {
  yield takeLatest(GET_ALL_LABELS_REQUEST, getAllLabelsRequest);
  yield takeLatest(GET_USER_LABELS_REQUEST, getUserLabelsRequest);
}
