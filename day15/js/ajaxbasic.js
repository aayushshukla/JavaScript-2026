function loadData() {
  // step 1  creating XMLHttpRequest Object  . state is 0 or unsent
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("info").innerHTML = this.response;
    }
  };

  // sets the request method , request url and synchoronous flag
  xhttp.open("GET", "../readme.md", true);
  // intiates the request.
  // the body argument in send()  provides the request bodu if any and it is ignored if request method is GET and HEAD
  xhttp.send();
}
