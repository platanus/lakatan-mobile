import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as ritesActions } from './slice';
import { CREATE_RITE_REQUEST } from '../types';
import ritesApi from '../../api/rites';

function* createRiteRequest({ payload }) {
  yield put(ritesActions.start());
  try {
    const {
      data:{
        id,
        attributes:{
          name,
          goal,
          team_id,
          user_minimum
        }
      },

    } = yield call(ritesApi.createRite, payload);
    console.log(data);
    // yield put(ritesActions.addNewRite({
    //   newRite: {
    //     id, name, goal, team_id, user_minimum,
    //   },
    // }));
  } catch (error) {
    console.log(error);
  }
  yield put(ritesActions.finish());
}

export default function* ritesSaga() {
  yield takeLatest(CREATE_RITE_REQUEST, createRiteRequest);
}
