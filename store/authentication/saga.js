import { call, put, takeLatest } from 'redux-saga/effects';
import { camelizeKeys } from 'humps';
import { actions as authenticationActions } from './slice';
import { actions as organizationsActions } from '../organizations/slice';
import {
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  SIGN_OUT_REQUEST,
  PASSWORD_CHANGE_REQUEST,
  CLEAR_AUTH_ERROR,
  CLEAR_AUTH_SUCCESS,
  CHANGE_NAME_REQUEST,
  REFRESH_PROFILE_REQUEST,
  SEND_FILE_REQUEST,
} from '../types';
import api from '../../api/authentication';
import orgApi from '../../api/organizations';

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
    yield put(authenticationActions.authError('Ha ocurrido un error'));
    break;
  case '401' :
    // yield put(authenticationActions.authError('¡La constraseña es incorrecta!'));
    yield put(authenticationActions.authError('Credenciales incorrectas'));
    break;
  case '404' :
    // yield put(authenticationActions.authError('¡Este email no está registrado!'));
    yield put(authenticationActions.authError('Credenciales incorrectas'));
    break;
  default :
    // yield put(authenticationActions.authError('¡El email o la constraseña son incorrectas!'));
    yield put(authenticationActions.authError('Credenciales incorrectas'));
  }
}

// eslint-disable-next-line max-statements
function *signInRequest({ payload }) {
  yield put(authenticationActions.start());
  try {
    const response = yield call(api.signInApi, payload);
    const camelResponse = camelizeKeys(response);
    console.log(response);

    const { isSuccess, data: { user: { authenticationToken, email, id, name, pictureData, lastOrg } } } = camelResponse.data;
    if (isSuccess) {
      if (lastOrg) {
        const { data: { data } } = yield call(orgApi.organization, { email, token: authenticationToken, id: lastOrg });
        yield put(organizationsActions.loadOrganizationSuccess({organization: { id: data.id, name: data.attributes.name, picture: data.attributes.picture, integration: data.attributes.integration}}));
      }
      yield put(authenticationActions.signInSuccess({
        email,
        authenticationToken,
        id,
        name,
        pictureData,
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
    if (payload.lastOrg) {
      yield call(api.setLastOrg, payload);
    }
    yield call(api.signOutApi, payload);
    yield put(authenticationActions.signOutSuccess('¡Has cerrado tu sesión!'));
  } catch (error) {
    yield put(authenticationActions.authError('¡Oops, hubo un error!'));
    yield put(authenticationActions.reset());
  }
  yield put(organizationsActions.reset());
  yield put(authenticationActions.finish());
}

function *passwordChangeErrorHandler(error) {
  switch (error) {
  case '422' :
    yield put(authenticationActions.authError('¡Este email no está registrado!'));
    break;
  default :
    yield put(authenticationActions.authError('¡Oops, hubo un error!'));
  }
}

function *passwordChangeRequest({ payload }) {
  yield put(authenticationActions.start());
  try {
    const response = yield call(api.passwordChangeApi, payload);
    const camelResponse = camelizeKeys(response);
    const { isSuccess } = camelResponse.data;
    if (isSuccess) {
      yield put(authenticationActions.changePasswordSuccess(
        '¡Ya puedes revisar tu correo!'));
    }
  } catch (error) {
    yield passwordChangeErrorHandler(error.response.status.toString());
  }
  yield put(authenticationActions.finish());
}

function *nameChangeRequest({ payload }) {
  yield put(authenticationActions.start());
  try {
    const response = yield call(api.nameChange, payload);
    const camelResponse = camelizeKeys(response);
    const { isSuccess } = camelResponse.data;
    if (isSuccess) {
      yield put(authenticationActions.changeNameSuccess(
        payload));
    }
  } catch (error) {
    console.log(error);
  }
  yield put(authenticationActions.finish());
}

function *getSessionRequest({ payload }) {
  yield put(authenticationActions.start());
  try {
    const response = yield call(api.getSesionApi, payload);
    const data = response.data;
    yield put(authenticationActions.refreshProfile(data));
  } catch (error) {
    console.log(error);
  }
  yield put(authenticationActions.finish());
}

function *uploadFileRequest({ payload, data }) {
  try {
    const repon = yield call(api.send_file, payload, data);
    const uploadedFileData = {
      id: data.fields.key.match(/^cache\/(.+)/)[1], // object key without prefix
      storage: 'cache',
      metadata: {
        size: payload.information.size,
        filename: payload.information.filename,
        mime_type: payload.data.type,
      },
    };
    try {
      yield call(api.update_image, payload, JSON.stringify(uploadedFileData));
    } catch (error) {
      console.log(error);
    }
    yield put(authenticationActions.updateImageProfile());
  } catch (error) {
    console.log(error);
  }
}

function *getUrlTempRequest({ payload }) {
  yield put(authenticationActions.start());
  try {
    const response = yield call(api.getUrlTemp, payload);
    const data = response.data;
    yield uploadFileRequest({ payload, data });
  } catch (error) {
    console.log('error 1');
    console.log(error);
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
  yield takeLatest(PASSWORD_CHANGE_REQUEST, passwordChangeRequest);
  yield takeLatest(CLEAR_AUTH_ERROR, clearAuthError);
  yield takeLatest(CLEAR_AUTH_SUCCESS, clearAuthSuccess);
  yield takeLatest(CHANGE_NAME_REQUEST, nameChangeRequest);
  yield takeLatest(REFRESH_PROFILE_REQUEST, getSessionRequest);
  yield takeLatest(SEND_FILE_REQUEST, getUrlTempRequest);
}
