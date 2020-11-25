import axios from 'axios';
import { decamelizeKeys } from 'humps';
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

function signUpApi({
  name, email, password, confirmPassword,
}) {
  const user = decamelizeKeys({ name, email, password, passwordConfirmation: confirmPassword });

  return axios({
    method: 'post',
    url: `${url}/api/v1/registrations`,
    data: {
      user,
    },
    headers: {
      'Content-type': 'application/json',
    },
  });
}

function signOutApi({ email, token }) {
  return axios({
    method: 'delete',
    url: `${url}/api/v1/sessions`,
    headers: {
      'X-User-Email': email,
      'X-User-token': token,
      'Content-type': 'application/json',
    },
  });
}

function getSesionApi({ email, token }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/sessions`,
    headers: {
      'X-User-Email': email,
      'X-User-token': token,
      'Content-type': 'application/json',
    },
  });
}

function passwordChangeApi({ email }) {
  return axios({
    method: 'post',
    url: `${url}api/v1/registrations/password_change`,
    data: {
      user: {
        email,
      },
    },
    headers: {
      'Content-type': 'application/json',
    },
  });
}

function name_change({ token, email, name }) {
  return axios({
    method: 'put',
    url: `${url}api/v1/registrations`,
    data: {
      user: {
        name,
      },
    },
    headers: {
      'X-User-Email': email,
      'X-User-token': token,
      'Content-type': 'application/json',
    },

  });
}
function get_url_temp({ token, email }) {
  console.log(token);
  return axios({
    method: 'get',
    url: `${url}upload`,
    headers: {
      'X-User-Email': email,
      'X-User-token': token,
      'Content-type': 'application/json',
    },

  });
}
function send_file({ formData }, info) {
  const {method, fields} = info;
  const link = info.url;
  return axios({
    method,
    url: link,
    data: {
      formData,
    },
    headers: { fields,
      'content-type': 'multipart/form-data'  
    },

  });
}

const authenticactionApi = {
  signInApi,
  signUpApi,
  signOutApi,
  getSesionApi,
  passwordChangeApi,
  name_change,
  get_url_temp,
  send_file,
};

export default authenticactionApi;
