function greetUser(name, formatter) {
  return formatter(name);
}

function convertUpperCase(name) {
  return name.toUpperCase() + "!!!";
}

console.log(greetUser("aayush", convertUpperCase));
