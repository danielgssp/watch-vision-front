const url = "http://192.168.0.101:4000";

export const getMedia = () => {
  return fetch(`${url}/listMedia`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));
};

export const sendMedia = media => {
  return fetch(`${url}/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(media)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      return myJson;
    });
};
