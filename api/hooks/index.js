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

const hooksApi = {
  requestHooks,
};

export default hooksApi;
