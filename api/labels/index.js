import axios from 'axios';
import url from '../../env';

function getAllLabelsApi({ email, token }) {
  return axios({
    method: 'get',
    url: `${url}api/v1/labels`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function getUserLabelsApi({ user_id, email, token }) {
  return axios({
    method: 'get',
    url: `${url}api/v1/user_labels/${user_id}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function postUserLabelApi({ user_id, label_id, email, token }) {
  return axios({
    method: 'post',
    url: `${url}api/v1/user_labels`,
    data: {
      'user_label': {
        user_id,
        label_id,
      },
    },
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function deleteUserLabelApi({ label_id, email, token }) {
  return axios({
    method: 'delete',
    url: `${url}api/v1/user_labels/${label_id}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

const labelsApi = {
  getAllLabelsApi,
  getUserLabelsApi,
  postUserLabelApi,
  deleteUserLabelApi,
};

export default labelsApi;
