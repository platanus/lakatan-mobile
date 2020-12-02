import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as organizationsActions } from './slice';
import { actions as syncActions } from '../sync/slice';
import { actions as teamsActions } from '../Teams/slice';
import { actions as authActions } from '../authentication/slice';
import { CURRENT_ORGANIZATION_REQUEST, USER_ORGANIZATIONS_REQUEST, CHANGE_CURRENT_ORGANIZATION } from '../types';
import apiOrganizations from '../../api/organizations';

function *currentOrganizationRequest({ payload }) {
  yield put(organizationsActions.start());
  try {
    const {
      data: {
        data: {
          id,
          attributes: {
            name, picture,
          },
        },
      },
    } = yield call(apiOrganizations.organization, payload);
    yield put(organizationsActions.loadOrganizationSuccess({
      organization: {
        id, name, picture,
      },
    }));
  } catch (error) {
    console.log(error);
  }
  yield put(organizationsActions.finish());
}

function *userOrganizationsRequest({ payload }) {
  yield put(organizationsActions.start());
  try {
    const { data: data } = yield call(apiOrganizations.allOrganizations, payload);
    yield put(organizationsActions.loadUserOrganizations({
      organizations: data.data,
    }));
  } catch (error) {
    console.log(error);
    if (error.response.status.toString() === '401') {
      yield put(authActions.authError('¡Oops, hubo un error!'));
      yield put(teamsActions.reset());
      yield put(authActions.reset());
   }
  }
  yield put(organizationsActions.finish());
}

function *changeCurrentOrganization({ payload }) {
  const { id, name, picture } = payload;
  yield put(organizationsActions.start());
  yield put(syncActions.clearWorkspace());
  yield put(teamsActions.reset());
  yield put(organizationsActions.loadOrganizationSuccess({
    organization: {
      id, name, picture,
    },
  }));
  yield put(organizationsActions.finish());
}

export default function *teamsSaga() {
  yield takeLatest(CURRENT_ORGANIZATION_REQUEST, currentOrganizationRequest);
  yield takeLatest(USER_ORGANIZATIONS_REQUEST, userOrganizationsRequest);
  yield takeLatest(CHANGE_CURRENT_ORGANIZATION, changeCurrentOrganization);
}
