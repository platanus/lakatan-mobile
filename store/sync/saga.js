import { call, put, takeLatest } from 'redux-saga/effects';
import { camelizeKeys } from 'humps';
import { actions as syncActions } from './slice';
import {
  CREATE_WORKSPACE_REQUEST,
  WORKSPACE_CHANGES_REQUEST,
  END_SYNC_REQUEST,
  SET_WORKSPACE,
  CLEAR_WORKSPACE,
} from '../types';
import api from '../../api/sync';

function *setWorkspace({ payload }) {
  yield put(syncActions.start());
  try {
    const response = yield call(api.requestWorkpaceName, payload);
    const { slackWorkspaceName } = camelizeKeys(response).data.data.attributes;
    yield put(syncActions.setWorkspace({ slackWorkspaceName }));
  } catch (error) {
    console.log(error);
  }
  yield put(syncActions.finish());
}

function *createWorkspaceRequest({ payload }) {
  yield put(syncActions.start());
  try {
    yield call(api.createWorkspace, payload);
    const response = yield call(api.requestWorkpaceName, { token: payload.token, email: payload.email });
    const { slackWorkspaceName } = camelizeKeys(response).data.data.attributes;
    yield put(syncActions.setWorkspace({ slackWorkspaceName }));
  } catch (error) {
    console.log(error);
  }
  yield put(syncActions.finish());
}

// eslint-disable-next-line max-statements
function *workspaceChangesRequest({ payload }) {
  yield put(syncActions.start());
  try {
    const { data } = yield call(api.requestChanges, payload);
    const firstStep = [];
    const secondStep = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].model === 'User' || data[i].model === 'Team') {
        firstStep.push(data[i]);
      } else {
        secondStep.push(data[i]);
      }
    }
    yield put(syncActions.saveChanges({ firstStep, secondStep }));
  } catch (error) {
    console.log(error);
  }
  yield put(syncActions.finish());
}

function *endSyncRequest({ payload }) {
  yield put(syncActions.start());
  try {
    yield call(api.aprovedChanges, payload);
    yield put(syncActions.saveSuccess());
  } catch (error) {
    console.log(error);
  }
  yield put(syncActions.finish());
}

function *clearWorkspace() {
  yield put(syncActions.reset());
}

export default function *syncSaga() {
  yield takeLatest(CREATE_WORKSPACE_REQUEST, createWorkspaceRequest);
  yield takeLatest(WORKSPACE_CHANGES_REQUEST, workspaceChangesRequest);
  yield takeLatest(END_SYNC_REQUEST, endSyncRequest);
  yield takeLatest(SET_WORKSPACE, setWorkspace);
  yield takeLatest(CLEAR_WORKSPACE, clearWorkspace);
}
