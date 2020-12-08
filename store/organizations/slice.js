import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  organizationsList: [],
  loading: false,
  currentOrganization: {
    id: undefined,
    name: '',
    picture: '',
    integration: null,
  },
};

const slice = createSlice({
  name: 'organizations',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
    },
    loadUserOrganizations(state, action) {
      state.organizationsList = action.payload.organizations;
    },
    loadOrganizationSuccess(state, action) {
      state.currentOrganization = action.payload.organization;
    },
    finish(state) {
      state.loading = false;
    },
    reset(state) {
      return initialState;
    },
  },
});

export default slice;
export const { actions } = slice;
