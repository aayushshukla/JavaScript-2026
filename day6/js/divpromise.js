const divpromise = new Promise((resolve, reject) => {
  let x = 10;
  let y = 0;
  if (y === 0) {
    reject("Can not divide by 0");
  } else {
    resolve(x / y);
  }
})
  .then((res) => {
    console.log("Div result", res);
  })
  .catch((err) => {
    console.error("Div Error", err);
  });
