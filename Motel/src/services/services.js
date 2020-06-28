import axios from 'axios';
import {isEmpty} from 'lodash';

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
      .then(res => {
        if (isEmpty(res.data.data)) {
          throw res.data;
        }
        console.log('authen', res.data);
        resolve(res.data);
      })
      .catch(err => reject(err));
  });
};
