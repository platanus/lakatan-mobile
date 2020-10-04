import axios from 'axios';
import url from '../../env';

function newTeamApi({ name, purpose, members, token, email}) {
  return axios({
    method: 'post',
    url: `${url}/api/v1/teams`,
    data: {
      name,
      purpose,
      members
      },
    },
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

const createTeamApi = {
    newTeam,
};

export default createTeamApi;