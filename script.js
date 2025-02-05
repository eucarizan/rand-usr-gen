const apiUrl = new URL("https://randomuser.me/api/");

fetch(apiUrl)
  .then(response => response.json())
  .then(json => document.body.innerText = JSON.stringify(json))
  .catch(error => console.log(error));
