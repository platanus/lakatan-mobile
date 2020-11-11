import axios from 'axios';
import { decamelizeKeys } from 'humps';
import url from '../../env';

function createWorkspace({ email, token, slackToken }) {
  const integration = decamelizeKeys({ slackToken });

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

function updateWorkspace({ email, token, slackToken }) {
  const integration = decamelizeKeys({ slackToken });

  return axios({
    method: 'put',
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

function requestWorkpaceName({ email, token }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/integrations`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function requestChanges({ email, token }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/slack/request_changes`,
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

function aprovedChanges({ email, token, changes }) {
  return axios({
    method: 'post',
    url: `${url}/api/v1/slack`,
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
