import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as usersActions } from './slice';
import { USERS_REQUEST } from '../types';
import api from '../../api/users';


function* getUsersRequest({ payload }) {
  yield put(usersActions.start());
  try {
    const {
      data: {
        userList
      },

    } = yield call(api.users, payload);
    yield put(newTeamActions.create({
        userList,
      }))
    
  } catch (error) {
    console.log(error);
  }
  yield put(usersActions.finish());
}

export default function* usersSaga() {
  yield takeLatest(USERS_REQUEST, getUsersRequest);
}
