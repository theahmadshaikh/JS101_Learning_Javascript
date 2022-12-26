const prompt = require('prompt-sync')();
const userName = "ahmad2026";
const password = "123456";
const uName = prompt("Enter username ");
const pass = prompt("Enter password ");

if(userName === uName && pass === password)
  console.log("You can login");
else
  console.log("you can't login")