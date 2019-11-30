import Endpoints from "../constants/Endpoints";
import { headers } from "../default/SourcesHttp";

export const getMedia = () => {
  return fetch(Endpoints.LIST_MEDIA)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));
};

export const sendMedia = media => {
  return fetch(Endpoints.CREATE_MEDIA, {
    method: "POST",
    headers,
    body: JSON.stringify(media)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      return myJson;
    });
};
