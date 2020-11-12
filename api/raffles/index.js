import axios from 'axios';
import { decamelizeKeys } from 'humps';
import url from '../../env';

function createRaffle({
  selectedItems, taskId, email, token,
}) {
  const selectedItemsInt = [];
  selectedItems.forEach((item) => selectedItemsInt.push(parseInt(item, 10)));
  const data = decamelizeKeys({ usersList: selectedItemsInt, id: taskId });
  return axios({
    method: 'post',
    url: `${url}/api/v1/raffle`,
    data,
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
