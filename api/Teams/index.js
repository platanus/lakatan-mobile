import axios from 'axios';
import url from '../../env';

function allTeams({ email, token }) {
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

function team({ email, token, id }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/teams/${id}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

const apiTeams = {
  allTeams,
  team,
};

export default apiTeams;
