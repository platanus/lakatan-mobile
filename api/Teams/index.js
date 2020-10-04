import axios from 'axios';
import url from '../../env';

export default function allTeamsApi({ email, token }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/teams`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}
