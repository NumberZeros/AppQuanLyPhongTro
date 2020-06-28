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
//fetchAllReceipt
export function fetchAllReceipt() {
  const endpoint = `${URL.apiBaseURL}/receipts`;
  return request({endpoint, method: 'GET'});
}

export function createReceipt(data) {
  const endpoint = `${URL.apiBaseURL}/receipts/create`;
  return request({endpoint, method: 'POST', data});
}

export function editReceipt(data) {
  const endpoint = `${URL.apiBaseURL}/receipts/${data._id}`;
  return request({endpoint, method: 'PUT', data});
}

export function deleteReceipt(data) {
  const endpoint = `${URL.apiBaseURL}/receipts/${data._id}`;
  return request({endpoint, method: 'DELETE', data});
}

//other
export function fetchAllMotels() {
  const endpoint = `${URL.apiBaseURL}/motels`;
  return request({endpoint, method: 'GET'});
}