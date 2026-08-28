/*

    async and await are keyword 

    async is used with function signature 
    async funcion will always return a Promise 


    await keyword:
         only be used inside async function 
        it will make js wait for a promise to finish before moving ahead

*/

async function getData() {
  return "You data is here"; // it will return promise object
}

console.log(getData());

//getData().then((msg) => console.log(msg));

function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        "waiting is over ... 10k m sec completed. You will now get your data",
      );
    }, 10000);
  });
}

async function mydemo() {
  console.log("---async op started ----");
  const result = await wait();
  console.error(result);
  console.log("----- data is here-----");
}

mydemo();
