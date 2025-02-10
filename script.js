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
  document.body.append(tempDiv);
}

async function addUser() {
  await fetchUserData();
  const user = userData[userData.length - 1];

  let tempDiv = createUserDiv(user);

  let divs = document.getElementsByTagName('div');
  divs[divs.length - 1].insertAdjacentElement("afterend", tempDiv);
}

function createUserDiv(user) {
  const birthDate = new Date(user.dob.date).toLocaleDateString("en-US");
  let tempDiv = document.createElement("div");
  tempDiv.classList.add('user');

  tempDiv.innerHTML = `
    <h2 class="name">${user.name.first} ${user.name.last}</h2>
    <p class="email">Email: ${user.email}</p>
    <p class="password">Password: ${user.login.password}</p>
    <p class="location">Location: ${user.location.city}, ${user.location.country}</p>
    <p class="gender">Gender: ${user.gender}</p>
    <p class="phone">Phone: ${user.phone}</p>
    <p class="birthday">Birthday: ${birthDate}</p>
    <img class="photo" src="${user.picture.large}" alt="user photo"/>
  `;

  return tempDiv;
}

function saveUsers() {
  window.localStorage.setItem('savedusers', JSON.stringify(userData));
  showSavedUsers();
}

function showSavedUsers() {
  let divs = document.getElementsByTagName('div');

  let tempDiv = document.createElement("div");
  tempDiv.innerHTML = `
    <h3>Saved Users</h3>
  `;

  const users = JSON.parse(window.localStorage.getItem('savedusers'));

  if (users == null) return;

  for (let i = 0; i < users.length; i++) {
    let userDiv = createUserDiv(users[i]);
    userDiv.classList.add('saved');
    tempDiv.appendChild(userDiv);
  }

  if (divs.length == 0) {
    document.body.appendChild(tempDiv);
  } else {
    divs[divs.length - 1].insertAdjacentElement("afterend", tempDiv);
  }
}

window.onload = async () => {
  await fetchUserData();
  showSavedUsers();
  updateUserInfo();
}

document.getElementById("get-user-button").addEventListener('click', addUser);
document.getElementById("save-users-button").addEventListener('click', saveUsers);
