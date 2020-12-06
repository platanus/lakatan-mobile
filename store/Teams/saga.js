import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as teamsActions } from './slice';
import { actions as authActions } from '../authentication/slice';
import { ALL_TEAMS_REQUEST, CURRENT_TEAM_REQUEST, NEW_TEAM_REQUEST, CLEAR_TEAM } from '../types';
import apiTeams from '../../api/Teams';

function *requestsErrorHandler(error) {
  switch (error) {
  case '401':
    yield put(authActions.authError('¡Oops, hubo un error!'));
    yield put(teamsActions.reset());
    yield put(authActions.reset());
    break;
  default:
    console.log(error);
  }
}

function *allTeamsRequest({ payload }) {
  yield put(teamsActions.start());
  try {
    const { data } = yield call(apiTeams.allTeams, payload);
    yield put(teamsActions.loadTeamsSuccess({
      teams: data.data,
    }));
  } catch (error) {
    yield requestsErrorHandler(error.response.status.toString());
  }
  yield put(teamsActions.finish());
}

function *currentTeamRequest({ payload }) {
  yield put(teamsActions.start());
  try {
    const {
      data: {
        data: {
          id,
          attributes: {
            name, purpose, users, tasks,
          },
        },
      },
    } = yield call(apiTeams.team, payload);
    yield put(teamsActions.loadCurrentTeamSuccess({
      team: {
        id, name, purpose, members: users, rites: tasks,
      },
    }));
  } catch (error) {
    yield requestsErrorHandler(error.response.status.toString());
  }
  yield put(teamsActions.finish());
}

function *newTeamRequest({ payload }) {
  yield put(teamsActions.start());
  try {
    const { data: { data: { attributes: { name }, id } } } = yield call(apiTeams.newTeam, payload);
    yield put(teamsActions.addNewTeam({ newTeam: { attributes: { name }, id } }));
  } catch (error) {
    yield requestsErrorHandler(error.response.status.toString());
  }
  yield put(teamsActions.finish());
}

function *clearTeam() {
  yield put(teamsActions.clearTeam());
}

export default function *teamsSaga() {
  yield takeLatest(ALL_TEAMS_REQUEST, allTeamsRequest);
  yield takeLatest(CURRENT_TEAM_REQUEST, currentTeamRequest);
  yield takeLatest(NEW_TEAM_REQUEST, newTeamRequest);
  yield takeLatest(CLEAR_TEAM, clearTeam);
}
