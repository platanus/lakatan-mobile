import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as teamsActions } from './slice';
import { ALL_TEAMS_REQUEST } from '../types';
import allTeamsApi from '../../api/Teams';

function* allTeamsRequest({ payload }) {
  yield put(teamsActions.start());
  try {
    const { data } = yield call(allTeamsApi, payload);
    yield put(teamsActions.loadTeamsSuccess({
      teams: data.data,
    }));
  } catch (error) {
    console.log(error);
  }
  yield put(teamsActions.finish());
}

export default function* teamsSaga() {
  yield takeLatest(ALL_TEAMS_REQUEST, allTeamsRequest);
}
