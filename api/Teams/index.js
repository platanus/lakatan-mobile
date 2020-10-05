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

function newTeam({
  name, purpose, members, token, email,
}) {
  return axios({
    method: 'post',
    url: `${url}/api/v1/teams`,
    data: {
      name,
      purpose,
      users: members,
    },
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
  newTeam,
};

export default apiTeams;
