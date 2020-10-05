import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as teamsActions } from './slice';
import { ALL_TEAMS_REQUEST, CURRENT_TEAM_REQUEST, NEW_TEAM_REQUEST } from '../types';
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
    const {
      data: {
        data: {
          attributes: {
            name, purpose, users,
          },
        },
      },
    } = yield call(apiTeams.team, payload);
    yield put(teamsActions.loadCurrentTeamSuccess({
      team: { name, purpose, members: users },
    }));
  } catch (error) {
    console.log(error);
  }
  yield put(teamsActions.finish());
}

function* newTeamRequest({ payload }) {
  yield put(teamsActions.start());
  try {
    const { data: { data: { attributes: { name }, id } } } = yield call(apiTeams.newTeam, payload);
    yield put(teamsActions.addNewTeam({ newTeam: { attributes: { name }, id } }));
  } catch (error) {
    console.log(error);
  }
  yield put(teamsActions.finish());
}

export default function* teamsSaga() {
  yield takeLatest(ALL_TEAMS_REQUEST, allTeamsRequest);
  yield takeLatest(CURRENT_TEAM_REQUEST, currentTeamRequest);
  yield takeLatest(NEW_TEAM_REQUEST, newTeamRequest);
}
