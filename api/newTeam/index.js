import axios from 'axios';
import url from '../../env';

function newTeamApi({ name, purpose, members, token}) {
  return axios({
    method: 'post',
    url: `${url}/api/v1/teams`,
    data: {
      name,
      purpose,
      members,
      token
      },
    },
    headers: {
      'Content-type': 'application/json',
    },
  });
}

const createTeamApi = {
    newTeam,
};

export default createTeamApi;