import { call, put, takeLatest } from 'redux-saga/effects';
import { camelizeKeys } from 'humps';
import { actions as syncActions } from './slice';
import { actions as authActions } from '../authentication/slice';
import { actions as teamsActions } from '../Teams/slice';
import {
  CREATE_WORKSPACE_REQUEST,
  WORKSPACE_CHANGES_REQUEST,
  END_SYNC_REQUEST,
  SET_WORKSPACE,
  CLEAR_WORKSPACE,
  RESET_WORKSPACE_SUCCESS,
  CLEAR_WORKSPACE_ERROR,
  UPDATE_WORKSPACE_REQUEST,
} from '../types';
import api from '../../api/sync';

const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));

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

function *createWorkspaceErrorHendler(error) {
  switch (error.response.status.toString()) {
  case '401':
    yield put(authActions.authError('¡Oops, hubo un error!'));
    yield put(teamsActions.reset());
    yield put(authActions.reset());
    break;
  case '500':
    if (error.response.data.type === 'Slack::Web::Api::Errors::InvalidCode') {
      yield put(syncActions.createError());
    }
    break;
  default:
    console.log(error);
  }
}

function *createWorkspaceRequest({ payload }) {
  yield put(syncActions.start());
  try {
    yield call(api.createWorkspace, payload);
    const response = yield call(api.requestWorkpaceName, { token: payload.token, email: payload.email });
    const { slackWorkspaceName } = camelizeKeys(response).data.data.attributes;
    yield put(syncActions.setWorkspace({ slackWorkspaceName }));
    yield put(syncActions.success());
  } catch (error) {
    yield createWorkspaceErrorHendler(error);
  }
  yield put(syncActions.finish());
}

function *updateWorkspaceRequest({ payload }) {
  yield put(syncActions.start());
  try {
    yield call(api.updateWorkspace, payload);
    const response = yield call(api.requestWorkpaceName, { token: payload.token, email: payload.email });
    const { slackWorkspaceName } = camelizeKeys(response).data.data.attributes;
    yield put(syncActions.setWorkspace({ slackWorkspaceName }));
    yield put(syncActions.success());
  } catch (error) {
    yield createWorkspaceErrorHendler(error);
  }
  yield put(syncActions.finish());
}

// eslint-disable-next-line max-statements
function *workspaceChangesRequest({ payload }) {
  yield put(syncActions.start());
  try {
    let { data } = yield call(api.requestChanges, payload);
    const { id } = data;
    while (data.status !== 'ready') {
      data = yield call(api.showChanges, { ...payload, id });
      data = data.data;
      yield sleep(1000);
    }
    data = data.changes_list;
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
    yield put(syncActions.success());
  } catch (error) {
    console.log(error);
  }
  yield put(syncActions.finish());
}

function *resetSuccess() {
  yield put(syncActions.resetSuccess());
}

function *clearWorkspaceError() {
  yield put(syncActions.cleanError());
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
  yield takeLatest(RESET_WORKSPACE_SUCCESS, resetSuccess);
  yield takeLatest(CLEAR_WORKSPACE_ERROR, clearWorkspaceError);
  yield takeLatest(UPDATE_WORKSPACE_REQUEST, updateWorkspaceRequest);
}
