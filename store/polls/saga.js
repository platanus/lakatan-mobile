import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as pollActions } from './slice';
import { GET_POLLS_REQUEST, GET_POLL_REQUEST,
  CREATE_POLL_REQUEST, CREATE_VOTE_REQUEST ,
  DELETE_POLL_REQUEST} from '../types';
import api from '../../api/polls';

function *getPolls({ payload }) {
  yield put(pollActions.start());
  try {
    const response = yield call(api.getPolls, payload);
    yield put(pollActions.setPolls(response.data.data));
  } catch (error) {
    console.log(error);
  }
  yield put(pollActions.finish());
}

function *getPoll({ payload }) {
  yield put(pollActions.start());
  try {
    const response = yield call(api.getPoll, payload);
    yield put(pollActions.setPoll(response.data.data));
  } catch (error) {
    console.log(error);
  }
  yield put(pollActions.finish());
}

function *createVote({ payload }) {
  yield put(pollActions.start());
  try {
    const response = yield call(api.createVote, payload);
  } catch (error) {
    console.log(error);
  }
  yield put(pollActions.finish());
}

function *createPoll({ payload }) {
  yield put(pollActions.start());
  try {
    const response = yield call(api.createPoll, payload);
  } catch (error) {
    console.log(error);
  }
  yield put(pollActions.finish());
}

function *deletePoll({ payload }) {
  yield put(pollActions.start());
  try {
    yield call(api.deletePoll, payload);
  } catch (error) {
    console.log(error);
  }
  yield put(pollActions.finish());
}

function *listPolls() {
  yield put(pollActions.start());
  yield put(pollActions.listPolls());
  yield put(pollActions.finish());
}

export default function *pollsSaga() {
  yield takeLatest(GET_POLLS_REQUEST, getPolls);
  yield takeLatest(GET_POLL_REQUEST, getPoll);
  yield takeLatest(CREATE_POLL_REQUEST, createPoll);
  yield takeLatest(CREATE_VOTE_REQUEST, createVote);
  yield takeLatest(DELETE_POLL_REQUEST, deletePoll);
}
