import { airtableAPIKey, airtableApiUrl, airtableBase } from '../config';

export function getEvents() {
  let url = `${airtableApiUrl}/${airtableBase}/Event`;
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${airtableAPIKey}`,
      'Content-Type': 'application/json',
    },
    referrer: 'no-referrer',
  }).then(response => response);
}

export function postRegisterUser(data) {
  let url = `${airtableApiUrl}/${airtableBase}/Seekers`;
  return fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${airtableAPIKey}`,
      'Content-Type': 'application/json',
    },
    referrer: 'no-referrer',
    body: JSON.stringify(data),
  }).then(response => response);
}
