// Assignment Code
var generateBtn = document.querySelector("#generate"); //generateBtn is now a reference to the Generate Password Button

// Write password to the #password input
function writePassword() { //declaring a function
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //passwordText is now a reference to the textarea tag in the html; making it so that you can manipulate it in the html

  passwordText.value = "password"; //"password" is the value of that text area 

  var length = parseInt(prompt("Please enter the length of the password"));

if (length < 8) {
    console.log("Password length should be greater than 8 characters");
    alert("Password length should be greater than 8 characters");
}

if (length > 128) {
    console.log("Password length should be less than 128 characters");
    alert("Password length should be less than 128 characters");
}

    var characters = prompt

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //calling generateBtn is clicked, it calls the writePassword function 

function generatePassword() {
    //your task is to generate a string with the required criteria 
    return "password"
    //Step 1: look up how to generate a single character in javascript
    //Step 2: say we now have a length variable, then run a for loop and it should iterate LENGTH number of times and run the generate character function in it 
    //Step 3: return the resulting string
}