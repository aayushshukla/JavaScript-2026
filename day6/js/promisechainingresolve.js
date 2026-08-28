function registerStudent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        "Student registeration is done successfully. Please check admin for course material",
      );
      resolve("Registeration Done !!!");
    }, 3000);
  });
}

function getMaterial() {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      console.log(
        "Student received course material . Please check admin for exam dates ",
      );
      resolve("Course  Done !!!");
    }, 3000);
  });
}

function scheduleExam() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        "Student exam is schedule for 7 sep 2026. Please connect to admin to check results.",
      );
      resolve("Exams finished");
    }, 3000);
  });
}

function publishResult() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Student exam is result will be published on 12 sep 2026.");
      resolve("Exams Result Published!!");
    }, 3000);
  });
}

async function studentPortal() {
  await registerStudent();
  await getMaterial();
  await scheduleExam();
  await publishResult();
}

studentPortal();
