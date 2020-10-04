import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as newTeamActions } from './slice';
import { NEW_TEAM_REQUEST } from '../types';
import api from '../../api/newTeam';


function* createTeamRequest({ payload }) {
  yield put(newTeamActions.start());
  try {
    const {
      data: {
        id,
        name,
        created_at,
        updated_at
      },
    } = yield call(api.newTeam, payload);
      yield put(newTeamActions.create({
        [name]: payload,
        id,
      }),
    }
  } catch (error) {
    console.log(error);
  }
  yield put(newTeamActions.finish());
}

export default function* newTeamSaga() {
  yield takeLatest(NEW_TEAM_REQUEST, createTeamRequest);
}
