var generateBtn = document.querySelector("#generate"); //generateBtn is now a reference to the Generate Password Button
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890";
var spec = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"; 
var selectionString = "";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
// Write password to the #password input
function writePassword() { //declaring a function

    selectionString = "";
    
  var passwordText = document.querySelector("#password"); //passwordText is now a reference to the textarea tag in the html; making it so that you can manipulate it in the html

  var length = parseInt(prompt("Please enter the length of the password"));

    if (length < 8) {
        console.log("Password length should be greater than 8 characters");
        alert("Password length should be greater than 8 characters");
    }

    if (length > 128) {
        console.log("Password length should be less than 128 characters");
        alert("Password length should be less than 128 characters");
    }

    var lowCharCon = confirm("Would you like to include lowercase characters?"); 
    var upCharCon = confirm("Would you like to include uppercase characters?"); 
    var numCon = confirm("Would you like to include numbers?"); 
    var specCon = confirm("Would you like to include special characters?"); 

    

    if (lowCharCon === true) {
        selectionString = selectionString + lowChar; 
    } else {
        selectionString = selectionString;
    }; 
    
    if (upCharCon  === true) {
        selectionString = selectionString + upChar;
    } else {
        selectionString = selectionString;
    }; 

    if (numCon === true) {
        selectionString = selectionString + num
    } else {
        selectionString = selectionString;
    }; 
    
    if (specCon === true) {
        selectionString = selectionString + spec
    } else {
        selectionString = selectionString;
    };

    passwordText.value = generate(selectionString, length); //"password" is the value of that text area 


}

//We are defining the generate function here, now it takes two parameters
function generate(selectionString, length) {
    var password = ""; 
    for(var i=0; i<length; i++){ 
        password += selectionString[getRandomInt(0, selectionString.length)];
    }
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //calling generateBtn is clicked, it calls the writePassword function 

