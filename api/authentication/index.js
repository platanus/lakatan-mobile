import axios from 'axios';
import url from '../../env';

function signInApi({ email, password }) {
  return axios({
    method: 'post',
    url: `${url}/api/v1/sessions`,
    data: {
      user: {
        email,
        password,
      },
    },
    headers: {
      'Content-type': 'application/json',
    },
  });
}

function signUpApi({ email, password, confirmPassword }) {
  return axios({
    method: 'post',
    url: `${url}/api/v1/registrations`,
    data: {
      user: {
        email,
        password,
        password_confirmation: confirmPassword,
      },
    },
    headers: {
      'Content-type': 'application/json',
    },
  });
}

const authenticactionApi = {
  signInApi,
  signUpApi,
};

export default authenticactionApi;
