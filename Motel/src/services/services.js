import axios from 'axios';

export const request = ({endpoint, method, data, param}) => {
  return new Promise((resolve, reject) => {
    const option = {
      method: method,
      url: endpoint,
      'Content-Type': 'application/json',
      data: method !== 'GET' ? data.data : null,
      param,
    };
    return axios(option)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
