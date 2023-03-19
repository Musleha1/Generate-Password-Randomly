// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function for getting a random element from an array

function getRandom(arr) {
    var randomElement = Math.floor(Math.random() * arr.length);
    return arr[randomElement];
}

// Function to generate password with user input

function generatePassword() {
    var passwordLength = prompt("How many characters would you like in your password? \nPlease choose between 10 - 64 characters.");

  // Validate password length

  if (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {
    return("Invalid input! \nPassword must be 10 - 64 characters long.");
   } else
   { alert("Your password will be " + passwordLength + " characters long.");
   }

  var hasSpecialCharacters = confirm("Click OK if you want to include special characters.")
  var hasNumericCharacters = confirm("Click OK if you want to include numbers.")
  var hasLowerCasedCharacters = confirm("Click OK if you want to include lower case characters.")
  var hasUpperCasedCharacters = confirm("Click OK if you want to include upper case characters.")

   // Validate characters

   if (!hasSpecialCharacters && !hasNumericCharacters && !hasLowerCasedCharacters && !hasUpperCasedCharacters) {
    return "Your password must contain at least one character type";
  }

  var userInput = []

  if(specialCharacters) {
    userInput = userInput.concat(specialCharacters);
  }

  if(numericCharacters) {
    alert("Your password will have numbers")
    userInput = userInput.concat(numericCharacters);
  } else {
    alert ("Your password will NOT have numbers")
    
  }

  if(lowerCasedCharacters) {
    alert("Your password will have lower case characters")
    userInput = userInput.concat(lowerCasedCharacters);
  } else {
    alert("Your password will NOT have lower case characters")
    
  }

  if(upperCasedCharacters) {
    alert("Your password will have upper case characters")
    userInput = userInput.concat(upperCasedCharacters);
  } else {
    alert("Your password will NOT have upper case characters")
    
  }

  if(specialCharacters === false && numericCharacters === false && lowerCasedCharacters === false && upperCasedCharacters === false) {
    alert("Your password must contain at least one character type.");
    
  }
  
  var password = "";
  for(var i = 0; i < passwordLength; i++){
    password = password.concat(getRandom(userInput));
    console.log(password)
  }
  return password;

}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);