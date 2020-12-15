import { call, put, take, takeLatest } from 'redux-saga/effects';
import { camelizeKeys } from 'humps';
import { actions as hooksActions } from './slice';
import api from '../../api/hooks';
import {
  GET_HOOKS_REQUEST,
  GET_SLACK_ENTITIES_REQUEST,
  SET_HOOK_REQUEST,
  CLEAR_HOOK_SUCCESS,
  GET_RITE_INFO_REQUEST,
} from '../types';

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

function *getSlackEntitiesRequest({ payload }) {
  yield put(hooksActions.start());
  try {
    const response = yield call(api.slackEntitiesRequest, payload);
    const { data } = response;
    yield put(hooksActions.saveEntities(data));
  } catch (error) {
    console.log(error);
  }
  yield put(hooksActions.finish());
}

function *setHookRequest({ payload }) {
  yield put(hooksActions.start());
  try {
    yield call(api.setHookRequest, payload);
    yield put(hooksActions.hookSuccess());
  } catch (error) {
    console.log(error);
  }
  yield put(hooksActions.finish());
}

function *getRiteInfoRequest({ payload }) {
  yield put(hooksActions.start());
  try {
    const { data } = yield call(api.getRiteInfo, payload);
    const rite = camelizeKeys(data).data;
    yield put(hooksActions.saveRite(rite));
  } catch (error) {
    console.log(error);
  }
  yield put(hooksActions.finish());
}

function *clearHookSuccess() {
  yield put(hooksActions.clearSuccess());
}

export default function *hooksSaga() {
  yield takeLatest(GET_HOOKS_REQUEST, getHooksRequest);
  yield takeLatest(GET_SLACK_ENTITIES_REQUEST, getSlackEntitiesRequest);
  yield takeLatest(SET_HOOK_REQUEST, setHookRequest);
  yield takeLatest(CLEAR_HOOK_SUCCESS, clearHookSuccess);
  yield takeLatest(GET_RITE_INFO_REQUEST, getRiteInfoRequest);
}
