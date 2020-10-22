import axios from 'axios';
import url from '../../env';

function slackCode({ code ,token, email }) {
  return axios({
    method: 'post',
    url: `${url}/api/v1/users`,
    body: {
        'code': code
    },
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

const slackApi = {
  slackCode,
};

export default slackApi;
