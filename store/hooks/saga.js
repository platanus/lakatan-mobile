import { call, put, takeLatest } from 'redux-saga/effects';
import { camelizeKeys } from 'humps';
import { actions as hooksActions } from './slice';
import api from '../../api/hooks';
import { GET_HOOKS_REQUEST } from '../types';

// eslint-disable-next-line max-statements
function *getHooksRequest({ payload }) {
  yield put(hooksActions.start());
  try {
    const response = yield call(api.requestHooks, payload);
    const { data } = camelizeKeys(response).data;
    const inHooks = [];
    const outHooks = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].attributes.hookType === 'input') {
        inHooks.push(data[i]);
      } else {
        outHooks.push(data[i]);
      }
    }
    yield put(hooksActions.saveHooks({ inHooks, outHooks }));
  } catch (error) {
    console.log(error);
  }
  yield put(hooksActions.finish());
}

export default function *hooksSaga() {
  yield takeLatest(GET_HOOKS_REQUEST, getHooksRequest);
}
