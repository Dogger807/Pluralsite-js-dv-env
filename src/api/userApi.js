import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();
console.log ('baseUrl  = ' + baseUrl);// eslint-disable-line no-console

export function getUsers() {
  return get('users');
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess (response) {
  return response.json();
}
function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
