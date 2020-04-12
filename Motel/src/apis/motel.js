import {request} from '../services/services';
import {URL} from '../services/config';

export function fetchAllMotel() {
  const endpoint = `${URL.apiBaseURL}/motel`;
  return request({endpoint, menthod: 'GET'});
}
