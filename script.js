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

function addUser() {
}

window.onload = async () => {
  await fetchUserData();
  updateUserInfo();
}

document.getElementById("get-user-button").addEventListener('onClick', addUser);
