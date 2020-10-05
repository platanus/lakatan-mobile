import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as authenticationActions } from './slice';
import { SIGN_IN_REQUEST, SIGN_UP_REQUEST, SIGN_OUT_REQUEST, CLEAR_AUTH_ERROR} from '../types';
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
        email,
        authentication_token,
      }));
    }
  } catch (error) {
    if (error.response.status.toString() === '404') {
      yield put(authenticationActions.signInError('Este usuario no existe!'));
    }
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
                  name,
                },
        },
      },
    } = yield call(api.signUpApi, payload);
    if (is_success) {
      yield put(authenticationActions.signUpSuccess({
        name,
        email,
        authentication_token,
      }));
    }
  } catch (error) {
    console.log(error);
  }
  yield put(authenticationActions.finish());
}

function* signOutRequest({ payload }) {
  yield put(authenticationActions.start());
  try {
    const {
      data: {
        messages,
        is_success,
      },
    } = yield call(api.signOutApi, payload);
    if (is_success) {
      yield put(authenticationActions.signOutSuccess());
    }
  } catch {
    console.log('error sign out');
  }
  yield put(authenticationActions.finish());
}

function* clearAuthError() {
  yield put(authenticationActions.clearError());
}

export default function* authenticactionSaga() {
  yield takeLatest(SIGN_IN_REQUEST, signInRequest);
  yield takeLatest(SIGN_UP_REQUEST, signUpRequest);
  yield takeLatest(SIGN_OUT_REQUEST, signOutRequest);
  yield takeLatest(CLEAR_AUTH_ERROR, clearAuthError);
}
