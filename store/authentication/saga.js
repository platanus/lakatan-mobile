import { call, put, takeLatest } from 'redux-saga/effects';
import { camelizeKeys } from 'humps';
import { actions as authenticationActions } from './slice';
import {
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  SIGN_OUT_REQUEST,
  CLEAR_AUTH_ERROR,
  CLEAR_AUTH_SUCCESS,
} from '../types';
import api from '../../api/authentication';

function *signUpErrorHandler(error) {
  switch (error) {
  case '400' :
    yield put(authenticationActions.authError('¡Ha ocurrido un error!'));
    break;
  case '422' :
    yield put(authenticationActions.authError('¡Este correo ya está registrado!'));
    break;
  default :
    yield put(authenticationActions.authError('¡Ha ocurrido un error!'));
  }
}

function *signUpRequest({ payload }) {
  yield put(authenticationActions.start());
  try {
    const response = yield call(api.signUpApi, payload);
    const camelResponse = camelizeKeys(response);
    const { isSuccess } = camelResponse.data;
    if (isSuccess) {
      yield put(authenticationActions.signUpSuccess('¡Se ha registrado correctamente!'));
    }
  } catch (error) {
    yield signUpErrorHandler(error.response.status.toString());
  }
  yield put(authenticationActions.finish());
}

function *signInErrorHandler(error) {
  switch (error) {
  case '400' :
    yield put(authenticationActions.authError('¡Ha ocurrido un error!'));
    break;
  case '401' :
    yield put(authenticationActions.authError('¡La constraseña es incorrecta!'));
    break;
  case '404' :
    yield put(authenticationActions.authError('¡Este email no está registrado!'));
    break;
  default :
    yield put(authenticationActions.authError('¡El email o la constraseña son incorrectas!'));
  }
}

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
    yield signInErrorHandler(error.response.status.toString());
  }
  yield put(authenticationActions.finish());
}

function *signOutRequest({ payload }) {
  yield put(authenticationActions.start());
  try {
    yield call(api.signOutApi, payload);
    yield put(authenticationActions.signOutSuccess('¡Has cerrado tu sesión!'));
  } catch (error) {
    yield put(authenticationActions.authError('¡Oops, hubo un error!'));
    yield put(authenticationActions.reset());
  }
  yield put(authenticationActions.finish());
}

function *clearAuthError() {
  yield put(authenticationActions.clearError());
}

function *clearAuthSuccess() {
  yield put(authenticationActions.clearSuccess());
}

export default function *authenticactionSaga() {
  yield takeLatest(SIGN_IN_REQUEST, signInRequest);
  yield takeLatest(SIGN_UP_REQUEST, signUpRequest);
  yield takeLatest(SIGN_OUT_REQUEST, signOutRequest);
  yield takeLatest(CLEAR_AUTH_ERROR, clearAuthError);
  yield takeLatest(CLEAR_AUTH_SUCCESS, clearAuthSuccess);
}
