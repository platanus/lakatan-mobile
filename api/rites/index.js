import axios from 'axios';
import { decamelizeKeys } from 'humps';
import url from '../../env';

function createRite({
  name, goal, teamId, userMinimum, token, email, raffleType, selectedLabel,
}) {
  const dat = decamelizeKeys({ name, goal, teamId, userMinimum });

  return axios({
    method: 'post',
    url: `${url}/api/v1/tasks`,
    data: { ...dat, raffle_type: raffleType, label_id: selectedLabel },
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
