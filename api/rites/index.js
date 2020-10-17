import axios from 'axios';
import url from '../../env';

function createRite({
  name, goal, teamId, userMinimum, token, email,
}) {
  return axios({
    method: 'post',
    url: `${url}/api/v1/tasks`,
    data: {
      name,
      goal,
      // eslint-disable-next-line camelcase
      team_id: teamId,
      // eslint-disable-next-line camelcase
      user_minimum: userMinimum,

    },
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
