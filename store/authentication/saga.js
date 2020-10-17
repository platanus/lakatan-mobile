import { call, put, takeLatest } from 'redux-saga/effects';
import { camelizeKeys } from 'humps';
import { actions as authenticationActions } from './slice';
import { SIGN_IN_REQUEST, SIGN_UP_REQUEST, SIGN_OUT_REQUEST, CLEAR_AUTH_ERROR } from '../types';
import api from '../../api/authentication';

function *signInRequest({ payload }) {
  yield put(authenticationActions.start());
  try {
    const response = yield call(api.signInApi, payload);
    const camelResponse = camelizeKeys(response);
    const { isSuccess, data: { user: { authenticationToken, email } } } = camelResponse.data;
    if (isSuccess) {
      yield put(authenticationActions.signInSuccess({
        email,
        authenticationToken,
      }));
    }
  } catch (error) {
    if (error.response.status.toString() === '404') {
      yield put(authenticationActions.signInError('Este usuario no existe!'));
    }
  }
  yield put(authenticationActions.finish());
}

function *signUpRequest({ payload }) {
  yield put(authenticationActions.start());
  try {
    const response = yield call(api.signUpApi, payload);
    const camelResponse = camelizeKeys(response);
    const { isSuccess, data: { user: { authenticationToken, email, name } } } = camelResponse.data;
    if (isSuccess) {
      yield put(authenticationActions.signUpSuccess({
        name,
        email,
        authenticationToken,
      }));
    }
  } catch (error) {
    console.log(error);
  }
  yield put(authenticationActions.finish());
}

function *signOutRequest({ payload }) {
  yield put(authenticationActions.start());
  try {
    const response = yield call(api.signOutApi, payload);
    const camelResponse = camelizeKeys(response);
    const { isSuccess } = camelResponse.data;
    if (isSuccess) {
      yield put(authenticationActions.signOutSuccess());
    }
  } catch (error) {
    console.log('error sign out');
  }
  yield put(authenticationActions.finish());
}

function *clearAuthError() {
  yield put(authenticationActions.clearError());
}

export default function *authenticactionSaga() {
  yield takeLatest(SIGN_IN_REQUEST, signInRequest);
  yield takeLatest(SIGN_UP_REQUEST, signUpRequest);
  yield takeLatest(SIGN_OUT_REQUEST, signOutRequest);
  yield takeLatest(CLEAR_AUTH_ERROR, clearAuthError);
}
