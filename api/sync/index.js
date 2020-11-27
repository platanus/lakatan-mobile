import axios from 'axios';
import { decamelizeKeys } from 'humps';
import url from '../../env';

function createWorkspace({ email, token, slackToken, organizationId }) {
  const integration = decamelizeKeys({ slackToken, organizationId });

  return axios({
    method: 'post',
    url: `${url}/api/v1/integrations`,
    data: {
      integration,
    },
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function updateWorkspace({ email, token, slackToken, organizationId }) {
  const integration = decamelizeKeys({ slackToken, organizationId });

  return axios({
    method: 'put',
    url: `${url}/api/v1/integrations/${organizationId}`,
    data: {
      integration,
    },
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function requestWorkpaceName({ email, token, id }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/integrations/${id}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function requestChanges({ email, token, id }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/slack/request_changes/${id}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function showChanges({ email, token, id }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/slack/show_changes/${id}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function aprovedChanges({ email, token, changes, id }) {
  return axios({
    method: 'post',
    url: `${url}/api/v1/slack?org_id=${id}`,
    data: changes,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

const apiSync = {
  createWorkspace,
  requestChanges,
  aprovedChanges,
  requestWorkpaceName,
  showChanges,
  updateWorkspace,
};

export default apiSync;
