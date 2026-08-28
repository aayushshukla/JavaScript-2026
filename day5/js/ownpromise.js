// step1 : created promise object using promise constructor
const mypromise = new Promise((resolve, reject) => {
  // write aysnc code like call to api , network operation , db operation
  setTimeout(() => {
    // return an object stating promise is successfull
    resolve({
      msg: "Promise is fullfilled. Task Is Done",
    });
  }, 3000);
});

// step 2 : consume the promise
mypromise
  .then((resolveobj) => {
    console.log(`resolve object ${resolveobj}`);
    console.log(`data is ${resolveobj.msg}`);
  })
  .catch((err) => {
    console.error("failed promise.");
  });
