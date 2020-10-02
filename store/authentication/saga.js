import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as authenticationActions } from './slice';
import { SIGN_IN_REQUEST, SIGN_UP_REQUEST } from '../types';
import api from '../../api/authentication';

function* signInRequest({ payload }) {
  yield put(authenticationActions.start());
  try {
    const {
      data: {
        messages,
        is_success,
        data: {
          user:
                {
                  authentication_token,
                  email,
                },
        },
      },
    } = yield call(api.signInApi, payload);
    if (is_success) {
      yield put(authenticationActions.signInSuccess({
        [email]: payload,
        authentication_token,
      }));
    }
  } catch (error) {
    console.log(error);
  }
  yield put(authenticationActions.finish());
}

function* signUpRequest({ payload }) {
  yield put(authenticationActions.start());
  try {
    const {
      data: {
        messages,
        is_success,
        data: {
          user:
                {
                  authentication_token,
                  email,
                },
        },
      },
    } = yield call(api.signUpApi, payload);
    if (is_success) {
      yield put(authenticationActions.signUpSuccess({
        email,
        authentication_token,
      }));
    }
  } catch (error) {
    console.log(error);
  }
  yield put(authenticationActions.finish());
}

export default function* authenticactionSaga() {
  yield takeLatest(SIGN_IN_REQUEST, signInRequest);
  yield takeLatest(SIGN_UP_REQUEST, signUpRequest);
}
