import axios from 'axios';

export const request = ({endpoint, method, data, param}) => {
  return new Promise((resolve, reject) => {
    const option = {
      method: method,
      url: endpoint,
      'Content-Type': 'application/json',
      data: method !== 'GET' ? data : null,
      param,
    };
    console.log('axios', option);
    return axios(option)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};
