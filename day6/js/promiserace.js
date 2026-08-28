const server1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Server 1 results");
    resolve("my data1");
  }, 3000);
});

const server2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Server 2 results");
    resolve("my data 2");
  }, 2000);
});

Promise.race([server1, server2]).then((result) => {
  console.log("race");
  console.log(result);
});

Promise.all([server1, server2]).then((result) => {
  console.log("promise all");
  console.log("all", result);
});
