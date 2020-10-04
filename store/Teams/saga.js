import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as teamsActions } from './slice';
import { ALL_TEAMS_REQUEST, CURRENT_TEAM_REQUEST } from '../types';
import apiTeams from '../../api/Teams';

function* allTeamsRequest({ payload }) {
  yield put(teamsActions.start());
  try {
    const { data } = yield call(apiTeams.allTeams, payload);
    yield put(teamsActions.loadTeamsSuccess({
      teams: data.data,
    }));
  } catch (error) {
    console.log(error);
  }
  yield put(teamsActions.finish());
}

function* currentTeamRequest({ payload }) {
  yield put(teamsActions.start());
  try {
    const { data } = yield call(apiTeams.team, payload);
    yield put(teamsActions.loadCurrentTeamSuccess({
      team: data.data,
    }));
  } catch (error) {
    console.log(error);
  }
  yield put(teamsActions.finish());
}

export default function* teamsSaga() {
  yield takeLatest(ALL_TEAMS_REQUEST, allTeamsRequest);
  yield takeLatest(CURRENT_TEAM_REQUEST, currentTeamRequest);
}
