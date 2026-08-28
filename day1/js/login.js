// function functioname(arg1,arrg2..)  { body  }   arguments are option
function login() {
  //getElementById() - from the document (DOM) we want to get the value for which id uname or upass
  let username = document.getElementById("uname").value; // getting value from uname idW
  let password = document.getElementById("upass").value;
  console.log("Login button is clicked" + username + "\t" + password); // print login button is clicjked on console
  alert("Button is clicked" + username + "\t" + password); // display message box to the user
}
