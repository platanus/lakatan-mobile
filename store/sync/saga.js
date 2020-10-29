import { call, put, takeLatest } from 'redux-saga/effects';
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
  yield put(syncActions.setWorkspace({ payload }));
}

function *createWorkspaceRequest({ payload }) {
  yield put(syncActions.start());
  try {
    const data = yield call(api.createWorkspace, payload);
  } catch (error) {
    // hacer algo con los errores cuando esten definidos
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
    // chequear si esta bien que sea data.data
    for (let i = 0; i < data.length; i++) {
      if (data[i].model === 'User' || data[i].model === 'Team') {
        firstStep.push(data[i]);
      } else {
        secondStep.push(data[i]);
      }
    }
    yield put(syncActions.saveChanges({ firstStep, secondStep }));
  } catch (error) {
    // hacer algo con los errores cuando esten definidos
    console.log(error);
  }
  yield put(syncActions.finish());
}

function *endSyncRequest({ payload }) {
  yield put(syncActions.start());
  try {
    const data = yield call(api.aprovedChanges, payload);
    // hacer algo con data cuando este definido que retorna la consulta
  } catch (error) {
    // hacer algo con los errores cuando esten definidos
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
