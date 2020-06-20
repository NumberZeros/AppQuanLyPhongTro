import {request} from '../services/services';
import {URL} from '../services/config';
///customer
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

//contact
export function fetchAllContacts() {
  const endpoint = `${URL.apiBaseURL}/contacts`;
  return request({endpoint, method: 'GET'});
}

export function createContacts(data) {
  const endpoint = `${URL.apiBaseURL}/contacts/create`;
  return request({endpoint, method: 'POST', data});
}

export function editContacts(data) {
  const endpoint = `${URL.apiBaseURL}/contacts/${data._id}`;
  return request({endpoint, method: 'PUT', data});
}
