const url = "https://jsonplaceholder.typicode.com/todos";
function apiData(httpmethod, url) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest(); // step 1 object created
    xhttp.responseType = "json";
    xhttp.onload = () => {
      console.log("loading data .....");
      if (xhttp.status == 200) {
        resolve(xhttp.response);
      } else {
        reject("Failed to load data");
      }
    };
    xhttp.onerror = () => {
      reject("Some error while loading the data");
    };

    xhttp.open(httpmethod, url); // step 2
    xhttp.send(); // step3
  });
}

function addApiData(httpmethod, url, body) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest(); // step 1 object created

    xhttp.responseType = "json";
    xhttp.open(httpmethod, url); // step 2
    xhttp.setRequestHeader("Content-Type", "applications/json");
    xhttp.onload = () => {
      console.log("loading data .....");
      if (xhttp.status < 400) {
        resolve(xhttp.response);
      } else {
        reject("Failed to add data");
      }
    };
    xhttp.onerror = () => {
      reject("Some error while ADDING the data");
    };

    xhttp.send(body); // step3 sending request along with body data
  });
}

apiData("GET", url)
  .then((res) => {
    console.log("Loaded data", res);
  })
  .catch((err) => {
    console.log(err);
  });

newToDoTask = {
  title: "Take JS Capstone Tomorrow ",
  completed: false,
};

addApiData("POST", url, newToDoTask)
  .then((res) => {
    console.log("added todo task", res);
  })
  .catch((err) => {
    console.log(err);
  });
