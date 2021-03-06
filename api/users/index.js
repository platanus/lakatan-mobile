import axios from 'axios';
import url from '../../env';

function users({ token, email, id }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/users?org_id=${id}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

const usersApi = {
  users,
};

export default usersApi;
