import axios from 'axios';
import url from '../../env';

function allOrganizations({ email, token, user_id }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/organizations?user_id=${user_id}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function newOrganization({
  name, picture, token, email,
}) {
  return axios({
    method: 'post',
    url: `${url}/api/v1/organizations`,
    data: {
      name,
      picture,
    },
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function organization({ email, token, id }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/organizations/${id}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

const apiOrganizations = {
  organization,
  newOrganization,
  allOrganizations,
};

export default apiOrganizations;
