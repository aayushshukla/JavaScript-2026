const url = "https://jsonplaceholder.typicode.com/comments";
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data[0].email))
  .catch((err) => console.error("error while getting the data", err));

async function getComments() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log("-----------------------");
    console.log(data[1].email);
  } catch (err) {
    console.log("error while getting the data", err);
  }
}

getComments();
