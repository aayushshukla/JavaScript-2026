const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let permission = false;
    if (permission) {
      resolve({
        msg: "You can access data.",
        data: {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
      });
      console.log("My Async task is done");
    } else {
      reject({
        errormsg:
          "Permission is denied . Please connect to admin to get permission .",
      });
    }
  }, 3000);
});

// consume promise
mypromise
  .then((resolveobj) => {
    console.log("---data---");
    console.log(resolveobj);
  })
  .catch((errorobj) => {
    console.error(errorobj.errormsg);
  });
