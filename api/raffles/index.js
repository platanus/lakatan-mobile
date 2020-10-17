import axios from 'axios';
import url from '../../env';

function createRaffle({
  selectedItems, taskId, email, token,
}) {
  const selectedItemsInt = [];
  selectedItems.forEach((item) => selectedItemsInt.push(parseInt(item, 10)));

  return axios({
    method: 'post',
    url: `${url}/api/v1/raffle`,
    data: {
      // eslint-disable-next-line camelcase
      users_list: selectedItemsInt,
      id: taskId,
    },
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

const rafflesApi = {
  createRaffle,
};

export default rafflesApi;
