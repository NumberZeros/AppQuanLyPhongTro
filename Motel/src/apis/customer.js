import {request} from '../services/services';
import {URL} from '../services/config';

export function fetchAllCustomers() {
  const endpoint = `${URL.apiBaseURL}/customers`;
  return request({endpoint, method: 'GET'});
}

export function createCustomer(data) {
  const endpoint = `${URL.apiBaseURL}/customers/create`;
  return request({endpoint, method: 'POST', data});
}

export function editCustomer(data) {
  const endpoint = `${URL.apiBaseURL}/customers/${data._id}`;
  return request({endpoint, method: 'PUT', data});
}
