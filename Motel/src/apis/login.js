import {request} from '../services/services';
import {URL} from '../services/config';

export function login(data) {
  const endpoint = `${URL.apiBaseURL}/account/login/`;
  return request({endpoint, method: 'POST', data});
}
