// Assignment code here
function makepassword() {
  var numbers= "123456789";

  var uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var lowercase= "abcdefghijklmnopqrstuvwxyz";

  var special characters= "!@#$%^&*()";

  var randomized password ="";

  var x = Math.floor(Math.random());

  var rand = numbers[x];

  var rand = uppercase[x];

  var rand = lowercase [x];
  
  var rand = special characters[x];

  alert (rand);


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

