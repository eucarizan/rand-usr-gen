function requestListener() {
  document.getElementsByTagName("body")[0].innerHTML = this.response;
}

const request = new XMLHttpRequest();
request.addEventListener("load", requestListener);
request.open("GET", "https://randomuser.me/api/");
request.send();
