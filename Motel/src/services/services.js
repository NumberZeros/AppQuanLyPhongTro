import axios from 'axios';

export const request = ({endpoint, menthod, data, param}) => {
  const option = {
    method: menthod,
    url: endpoint,
    'Content-Type': 'application/json',
    data: menthod !== 'GET' ? data : null,
    param,
  };
  return axios(option).then(res => res.data);
};
