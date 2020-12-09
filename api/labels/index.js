import axios from 'axios';
import url from '../../env';

function getAllLabelsApi() {
  return axios({
    method: 'get',
    url: `${url}api/v1/labels`,
    headers: {
      'Content-type': 'application/json',
    },
  });
}

function getUserLabelsApi({ id }) {
  return axios({
    method: 'get',
    url: `${url}api/v1/user_labels/${id}`,
    headers: {
      'Content-type': 'application/json',
    },
  });
}

const labelsApi = {
  getAllLabelsApi,
  getUserLabelsApi,
};

export default labelsApi;
