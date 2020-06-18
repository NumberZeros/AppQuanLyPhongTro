import {request} from '../services/services';
import {URL} from '../services/config';

export function fetchAllMotel() {
  const endpoint = `${URL.apiBaseURL}/motels`;
  return request({endpoint, method: 'GET'});
}

export function createMotel(data) {
  const endpoint = `${URL.apiBaseURL}/motels/create`;
  return request({endpoint, method: 'POST', data});
}

export function edit(data) {
  const endpoint = `${URL.apiBaseURL}/motels/${data._id}`;
  return request({endpoint, method: 'PUT', data});
}
