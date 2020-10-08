import axios from 'axios';
import url from '../../env';

function createRite({
  name, goal, team_id, user_minimum, token, email,
}) {
  return axios({
    method: 'post',
    url: `${url}/api/v1/tasks`,
    data: {
      name,
      goal,
      team_id,
      user_minimum,

    },
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function makeRaffleApi({
  selectedItems, task_id, email, token,
}) {
  const selectedItemsInt = [];
  selectedItems.forEach((item) => selectedItemsInt.push(parseInt(item, 10)));
  return axios({
    method: 'post',
    url: `${url}/api/v1/raffle`,
    data: {
      users_list: selectedItemsInt,
      id: task_id,
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
  makeRaffleApi,
};

export default ritesApi;
