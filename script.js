const apiUrl = new URL("https://randomuser.me/api/");
let userData = [];

async function fetchUserData() {
  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    userData.push(json.results[0]);
  } catch (error) {
    console.log(error);
  }
}

function updateUserInfo() {
  if (userData.length === 0) return;

  const user = userData[0];
  const birthDate = new Date(user.dob.date).toLocaleDateString("en-US");

  document.querySelector(".name").textContent = `${user.name.first} ${user.name.last}`;
  document.querySelector(".email").textContent = `Email: ${user.email}`;
  document.querySelector(".password").textContent = `Password: ${user.login.password}`;
  document.querySelector(".location").textContent = `Location: ${user.location.city}, ${user.location.country}`;
  document.querySelector(".gender").textContent = `Gender: ${user.gender}`;
  document.querySelector(".phone").textContent = `Phone: ${user.phone}`;
  document.querySelector(".birthday").textContent = `Birthday: ${birthDate}`;
  document.querySelector(".photo").src = user.picture.large;
}

async function addUser() {
  await fetchUserData();
  const user = userData[userData.length - 1];
  const birthDate = new Date(user.dob.date).toLocaleDateString("en-US");

  let content = `
    <h2 class="name">${user.name.first} ${user.name.last}</h2>
    <p class="email">Email: ${user.email}</p>
    <p class="password">Password: ${user.login.password}</p>
    <p class="location">Location: ${user.location.city}, ${user.location.country}</p>
    <p class="gender">Gender: ${user.gender}</p>
    <p class="phone">Phone: ${user.phone}</p>
    <p class="birthday">Birthday: ${birthDate}</p>
    <img class="photo" src="${user.picture.large}" alt="user photo"/>
  `;
  let tempDiv = document.createElement("div");
  tempDiv.innerHTML = content;
  tempDiv.classList.add('user');

  let divs = document.getElementsByTagName('div');
  divs[divs.length - 1].insertAdjacentElement("afterend", tempDiv);
}

window.onload = async () => {
  await fetchUserData();
  updateUserInfo();
}

document.getElementById("get-user-button").addEventListener('click', addUser);
