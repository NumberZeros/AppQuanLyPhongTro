import {request} from '../services/services';
import {URL} from '../services/config';

export function login() {
  const endpoint = `${URL.apiBaseURL}/account`;
  return request({endpoint, menthod: 'GET'});
}
