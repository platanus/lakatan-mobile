import axios from 'axios';
import url from '../../env';

function requestHooks({ email, token, taskId }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/hooks?task_id=${taskId}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function slackEntitiesRequest({ email, token, organizationId }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/slack/entities?org_id=${organizationId}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function setHookRequest({ email, token, hookOf, hookType, hookName, hookUrl, taskId, reference }) {
  return axios({
    method: 'post',
    url: `${url}/api/v1/hooks`,
    data: {
      hook_type: hookOf,
      type: hookType,
      task_id: taskId,
      name: hookName,
      url: hookUrl,
      slack_reference: reference,
    },
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function getRiteInfo({ email, token, id }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/hooks/${id}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

const hooksApi = {
  requestHooks,
  slackEntitiesRequest,
  setHookRequest,
  getRiteInfo,
};

export default hooksApi;
