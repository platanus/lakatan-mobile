import axios from 'axios';
import { decamelizeKeys } from 'humps';
import url from '../../env';

function createWorkspace({ email, token, slackToken }) {
  // const integration = decamelizeKeys({ slackToken });

  return axios({
    method: 'post',
    url: `${url}/api/v1/integrations`,
    data: {
      integration: {
        slack_token: slackToken,
      },
    },
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
    // arreglar ruta
    url: `${url}/api/v1/slack`,
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
    // arreglar ruta
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
};

export default apiSync;
