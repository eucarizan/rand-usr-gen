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

  let tempDiv = createUserDiv(user);
  // document.body.append(tempDiv);
  document.querySelector('.user-list').appendChild(tempDiv);
}

async function addUser() {
  await fetchUserData();
  const user = userData[userData.length - 1];

  let tempDiv = createUserDiv(user);

  // let divs = document.getElementsByTagName('div');
  // divs[divs.length - 1].insertAdjacentElement("afterend", tempDiv);
  let divs = document.querySelector('.user-list');
  divs.appendChild(tempDiv);
}

function createUserDiv(user) {
  const birthDate = new Date(user.dob.date).toLocaleDateString("en-US");
  let tempDiv = document.createElement("div");
  tempDiv.classList.add('user');

  tempDiv.innerHTML = `
    <img class="photo" src="${user.picture.large}" alt="user photo"/>
    <div class="user-info">
      <div class="name"><strong>${user.name.first} ${user.name.last}</strong><span>${user.login.username}</span></div>
      <div class="email"><strong>${user.email}</strong><span>email</span></div>
      <div class="password"><strong>${user.login.password}</strong><span>password</span></div>
      <div class="location"><strong>${user.location.city}, ${user.location.country}</strong><span>location</span></div>
      <div class="gender"><strong>${user.gender}</strong><span>gender</span></div>
      <div class="phone"><strong>${user.phone}</strong><span>phone</span></div>
      <div class="birthday"><strong>${birthDate}</strong><span>birthday</span></div>
    </div>
  `;

  return tempDiv;
}

function saveUsers() {
  window.localStorage.setItem('savedusers', JSON.stringify(userData));
  showSavedUsers();
}

function showSavedUsers() {
  const users = JSON.parse(window.localStorage.getItem('savedusers'));
  if (!users || users.length == 0) return;

  let existingSavedUsers = document.querySelector('.saved-users');
  if (existingSavedUsers) {
    existingSavedUsers.remove();
  }

  let tempDiv = document.createElement("div");
  tempDiv.classList.add('saved-users');
  tempDiv.innerHTML = `<h3>Saved Users</h3>`;

  for (let i = 0; i < users.length; i++) {
    let userDiv = createUserDiv(users[i]);
    userDiv.classList.add('saved');
    tempDiv.appendChild(userDiv);
  }

  // let divs = document.getElementsByTagName('div');
  let divs = document.querySelector('.user-list');
  if (divs.length == 0) {
    document.body.appendChild(tempDiv);
  } else {
    divs.insertAdjacentElement("afterend", tempDiv);
  }
}

window.onload = async () => {
  await fetchUserData();
  showSavedUsers();
  updateUserInfo();
}

document.getElementById("get-user-button").addEventListener('click', addUser);
document.getElementById("save-users-button").addEventListener('click', saveUsers);
