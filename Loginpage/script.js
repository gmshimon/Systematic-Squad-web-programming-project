// DOM Elements
const user = document.querySelector("#username");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#submitBtn");
const message = document.querySelector(".message");

// Database object

const credentials = [
  {
    username: "admin",
    password: "password",
  },
  {
    username: "staff",
    password: "password",
  },
  {
    username: "manager",
    password: "password",
  },
  {
    username: "blaze",
    password: "123",
  },
];

// Event Listeners
loginBtn.addEventListener("click", (e) => {
  // Default form behavior change
  e.preventDefault();

  let ifValid = false;

  credentials.forEach((item) => {
    if (item.username === user.value && item.password === password.value) {
      ifValid = true;
    }
  });

  message.classList.remove("success");
  message.classList.remove("warning");

  if (ifValid) {
    message.classList.add("success");
    message.innerText = "Successfully logged in!";
    if(user.value=="admin"){
      location.href="../Admin/homePaageAdmin.html";
    }
    else if(user.value=="staff"){
      location.href="../Staff/homePageStaff.html";
    }
    else if(user.value=="manager"){
      location.href="../Manager/managerProfile.html";
    }
  } else {
    message.classList.add("warning");
    message.innerText = "Incorrect username & password";
  }
});
