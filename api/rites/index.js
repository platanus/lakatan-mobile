import axios from 'axios';
import { decamelizeKeys } from 'humps';
import url from '../../env';

function createRite({
  name, goal, teamId, userMinimum, token, email,
}) {
  const data = decamelizeKeys({ name, goal, teamId, userMinimum });

  return axios({
    method: 'post',
    url: `${url}/api/v1/tasks`,
    data,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

const ritesApi = {
  createRite,
};

export default ritesApi;
