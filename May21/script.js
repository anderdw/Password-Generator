var fromPrompt = prompt("Select a number 8 - 128.");
var totalCharacters = parseInt(fromPrompt);

console.log(totalCharacters);

var typesOfCharacters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  specialCharacters: "!@#$%^&*()_+{}:",
}

var useLowerCase = confirm("Use Lowercase letters?");
var useUpperCase = confirm("Want to use Uppercase letters?")
var useSymbols = confirm("Wanna use symbols?");
var useNumbers = confirm("Want to use Numbers too?");

console.log("L: ", useLowerCase);
console.log("U: ", useUpperCase);
console.log("S: ", useSymbols);
console.log("N: ", useNumbers);

var possibleCharacters = [];

if (useLowerCase) {
  possibleCharacters = possibleCharacters.concat(typesOfCharacters.lowercase.split(""));
}
if (useUpperCase) {
  possibleCharacters = possibleCharacters.concat(typesOfCharacters.lowercase.toUpperCase().split(""));
}
if (useSymbols) {
  possibleCharacters = possibleCharacters.concat(typesOfCharacters.specialCharacters.split(""));
}

if (useNumbers) {
  for (var i = 0; i < 10; i++) {
    possibleCharacters.push(i);
  }
}

console.log(possibleCharacters);

var password = "";

for (var i = 0; i < totalCharacters; i++) {
  var position = Math.floor(Math.random() * possibleCharacters.length);
  password = password + possibleCharacters[position];
}

console.log(password);


var test = password;
document.getElementById("password").innerHTML = test;
