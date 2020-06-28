import {request} from '../services/services';
import {URL} from '../services/config';
///customer
export function fetchAllPayment() {
  const endpoint = `${URL.apiBaseURL}/payments`;
  return request({endpoint, method: 'GET'});
}

export function createPayment(data) {
  const endpoint = `${URL.apiBaseURL}/payments/create`;
  return request({endpoint, method: 'POST', data});
}

export function editPayment(data) {
  const endpoint = `${URL.apiBaseURL}/payments/${data._id}`;
  return request({endpoint, method: 'PUT', data});
}

export function deleteCusomter(data) {
  const endpoint = `${URL.apiBaseURL}/payments/${data._id}`;
  return request({endpoint, method: 'DELETE', data});
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

export function deleteContacts(data) {
  const endpoint = `${URL.apiBaseURL}/contacts/${data._id}`;
  return request({endpoint, method: 'DELETE', data});
}

//other
export function fetchAllMotels() {
  const endpoint = `${URL.apiBaseURL}/motels`;
  return request({endpoint, method: 'GET'});
}