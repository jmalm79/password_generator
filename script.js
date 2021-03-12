// adding arrays
var numbersArray = "0123456789";
var numbers = numbersArray.split("");
var includeLowerArray = "abcdefghjkmnpqrstuvwxyz"; //did not include i, l, o  
var includeLower = includeLowerArray.split("");
var includeUpperArray = 'ABCDEFGHJKMNPQRSTUVWXYZ'; //did not include I, L, O 
var includeUpper = includeUpperArray.split("");
var specialCharacterArray = "!@#%^&*?()<>/-+"; 
var specialCharacter = specialCharacterArray.split("");
var password = [];

// Assignment Code - Provided by BCS instructor
var generateBtn = document.querySelector("#generate");

//function to generate password
function generatePassword(){
  var password = ""; 
  var passwordLength = parseInt (prompt ("How many characters? (between 8 & 128) "));
      if (!passwordLength){ 
      alert ("Please pick a number");
      generatePassword();
      }
      if (isNaN(passwordLength)){
      alert ("please pick a number");
      generatePassword();
      }  
      if (passwordLength < 8 || passwordLength > 128 ){ 
      alert ("Please pick between 8 & 128");
      generatePassword();
      } else {

    var selectedRandoms = [];

    var trueSpecialCharacter = confirm ("Would you like to include special characters?"); //include if selected in the selectedRandoms
      if (trueSpecialCharacter){
      var selectedRandoms = selectedRandoms.concat(specialCharacter);
          console.log(selectedRandoms);
        }
    var trueNumbers = confirm ("Would you like to include Numerals?"); //include if selected in the selectedRandoms
      if (trueNumbers){
      var selectedRandoms = selectedRandoms.concat(numbers);
        console.log(selectedRandoms);
        } 
    var trueIncludeLower = confirm ("Would you like to include lowercase characters?"); //include if selected in the selectedRandoms
      if (trueIncludeLower){
      var selectedRandoms = selectedRandoms.concat(includeLower);
        console.log(selectedRandoms);
        }
    var trueIncludeUpper = confirm ("Would you like to include UPPERCASE characters?"); //include if selected in the selectedRandoms
      if (trueIncludeUpper){
      var selectedRandoms = selectedRandoms.concat(includeUpper);
        console.log(selectedRandoms);
    }

  }
console.log(selectedRandoms);

for (var i = 0; i < passwordLength; i++) {
    var results =  Math.floor(Math.random() * selectedRandoms.length);
    password += selectedRandoms[results];
  }


return password;

}



//console logs to verify with
console.log(numbers); //works 
console.log(includeLower); //works
console.log(includeUpper); //works
console.log(specialCharacter); //works



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
