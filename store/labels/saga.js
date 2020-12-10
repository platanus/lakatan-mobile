import { call, put, takeLatest, takeLeading } from 'redux-saga/effects';
import {
  GET_ALL_LABELS_REQUEST,
  GET_USER_LABELS_REQUEST,
  POST_USER_LABEL_REQUEST,
  DELETE_USER_LABEL_REQUEST,
} from '../types';
import api from '../../api/labels';
import { actions as labelsActions } from './slice';

function *getAllLabelsRequest({ payload }) {
  yield put(labelsActions.start());
  try {
    const respond = yield call(api.getAllLabelsApi, payload);
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

function *postUserLabelRequest({ payload }) {
  yield put(labelsActions.start());
  try {
    const respond = yield call(api.postUserLabelApi, payload);
    yield call(getUserLabelsRequest, { payload });
  } catch (error) {
    console.log(error);
  }
  yield put(labelsActions.finish());
}

function *deleteUserLabelRequest({ payload }) {
  yield put(labelsActions.start());
  try {
    const respond = yield call(api.deleteUserLabelApi, payload);
    yield call(getUserLabelsRequest, { payload });
  } catch (error) {
    console.log(error);
  }
  yield put(labelsActions.finish());
}

export default function *authenticactionSaga() {
  yield takeLatest(GET_ALL_LABELS_REQUEST, getAllLabelsRequest);
  yield takeLatest(GET_USER_LABELS_REQUEST, getUserLabelsRequest);
  yield takeLatest(POST_USER_LABEL_REQUEST, postUserLabelRequest);
  yield takeLeading(DELETE_USER_LABEL_REQUEST, deleteUserLabelRequest);
}
