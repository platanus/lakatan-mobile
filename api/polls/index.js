import axios from 'axios';
import url from '../../env';

function createPoll({ email, token, id, poll_options, name }) {
  return axios({
    method: 'post',
    url: `${url}/api/v1/polls`,
    data: {
      name,
      'team_id': id,
      poll_options,
    },
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function getPolls({ email, token, id }) {
  return axios({
    method: 'get',
    url: `${url}/api/v1/polls?team_id=${id}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function getPoll({ token, email, id }) {

  return axios({
    method: 'get',
    url: `${url}/api/v1/polls/${id}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function createVote({ token, email, poll_id, poll_option_id, user_id }) {
  return axios({
    method: 'post',
    url: `${url}/api/v1/votes`,
    data: {
      poll_id,
      poll_option_id,
      user_id,
    },
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

function deletePoll({ token, email, id }) {
  return axios({
    method: 'delete',
    url: `${url}/api/v1/polls/${id}`,
    headers: {
      'X-User-Email': email,
      'X-User-Token': token,
      'Content-type': 'application/json',
    },
  });
}

const apiPolls = {
  createPoll,
  getPolls,
  getPoll,
  createVote,
  deletePoll,
};

export default apiPolls;
