const form = document.getElementById("registerationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  formValidation();
});

function reset() {
  document.getElementById("uname").value = "";

  document.getElementById("upassword").value = "";

  document.getElementById("email").value = "";

  let usercity = document.getElementById("select");

  document.getElementById("uaddress").value = "";

  document.getElementById("conditions").unchecked;
}

function formValidation() {
  const username = document.getElementById("uname").value;

  const password = document.getElementById("upassword").value;

  const useremail = document.getElementById("email").value.trim();

  const usercity = document.getElementById("select").value;

  const useraddress = document.getElementById("uaddress").value;

  const agreement = document.getElementById("conditions").checked;

  const usernameerror = document.getElementById("username-error");
  const passworderror = document.getElementById("userpassword-error");
  const emailerror = document.getElementById("umail-error");
  const cityerror = document.getElementById("city-error");
  const addresserror = document.getElementById("address-error");
  const agreementerror = document.getElementById("conditions-error");

  usernameerror.textContent = "";
  passworderror.textContent = "";
  emailerror.textContent = "";
  cityerror.textContent = "";
  addresserror.textContent = "";
  agreementerror.textContent = "";

  let formIsValid = true;

  if (username === "") {
    usernameerror.textContent = "Enter valid user name . It can not be empty.";
    formIsValid = false;
  }

  if (password === "") {
    passworderror.textContent = "Password  can not be empty.";
    formIsValid = false;
  }

  if (password.length < 8) {
    passworderror.textContent = "Password  must be 8 characters long.";
    formIsValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  console.log(useremail);

  if (useremail === "") {
    emailerror.textContent = "Enter email id is required.";
    formIsValid = false;
  } else if (!emailPattern.test(useremail)) {
    emailerror.textContent = "Enter valid email id.";
    formIsValid = false;
  }

  if (usercity === "") {
    cityerror.textContent = "Select City";
    formIsValid = false;
  }

  if (!agreement) {
    agreementerror.textContent =
      "Please read and accept the terms and conditions.";
    formIsValid = false;
  }
  if (useraddress === "") {
    useraddress.textContent = "Fill permanent address";
    formIsValid = false;
  }

  if (formIsValid) {
    alert("User Registeration Is Successfull");
    reset();
  }
}
