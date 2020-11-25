import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as organizationsActions } from './slice';
import { actions as authActions } from '../authentication/slice';
import { CURRENT_ORGANIZATION_REQUEST, USER_ORGANIZATIONS_REQUEST } from '../types';
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
    const { data } = yield call(apiOrganizations.allOrganizations, payload).data;
    yield put(organizationsActions.loadUserOrganizations({
      organizations: data,
    }));
  } catch (error) {
    console.log(error);
  }
  yield put(organizationsActions.finish());
}

export default function *teamsSaga() {
  yield takeLatest(CURRENT_ORGANIZATION_REQUEST, currentOrganizationRequest);
  yield takeLatest(USER_ORGANIZATIONS_REQUEST, userOrganizationsRequest);
}
