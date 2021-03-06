import axios from 'axios';
import { decamelizeKeys } from 'humps';
import url from '../../env';
import { kebabCase, startsWith } from 'lodash';

function signInApi({ email, password }) {
  return axios({
    method: 'post',
    url: `${url}api/v1/sessions`,
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
    url: `${url}api/v1/registrations`,
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
    url: `${url}api/v1/sessions`,
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
    url: `${url}api/v1/sessions`,
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

function nameChange({ token, email, name }) {
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
function getUrlTemp({ token, email, data }) {
  const { uri, type } = data;
  const exten = type.split('/').pop();
  const name = email.split('.')[0];
  const filename = `${name}.${exten}`;

  return axios({
    method: 'get',
    url: `${url}api/v1/s3/presign?filename=${filename}&type=${type}`,
    headers: {
      'X-User-Email': email,
      'X-User-token': token,
      'Content-type': 'application/json',
    },

  });
}

function send_file({ data }, info) {
  const body = new FormData();
  const { method, fields } = info;
  const link = info.url;
  Object.keys(fields).forEach((fieldKey) => {
    if (startsWith(fieldKey, 'xAmz')) {
      body.append(kebabCase(fieldKey), fields[fieldKey]);
    } else {
      body.append(fieldKey, fields[fieldKey]);
    }
  });
  body.append('file', data);

  return axios({
    method: 'post',
    url: link,
    data: body,
    headers: {
      'Content-type': 'multipart/form-data',
    },
  });
}

function update_image({ token, email }, link) {
  const picture = link;

  return axios({
    method: 'put',
    url: `${url}api/v1/registrations`,
    data: {
      user: {
        picture,
      },
    },
    headers: {
      'X-User-Email': email,
      'X-User-token': token,
      'Content-type': 'application/json',
    },

  });
}

function setLastOrg({ token, email, lastOrg }) {
  const user = decamelizeKeys({ lastOrg });

  return axios({
    method: 'put',
    url: `${url}api/v1/registrations`,
    data: {
      user,
    },
    headers: {
      'X-User-Email': email,
      'X-User-token': token,
      'Content-type': 'application/json',
    },
  });
}

const authenticactionApi = {
  signInApi,
  signUpApi,
  signOutApi,
  getSesionApi,
  passwordChangeApi,
  nameChange,
  getUrlTemp,
  send_file,
  update_image,
  setLastOrg,
};

export default authenticactionApi;
