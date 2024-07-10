// Palindrome is the name given to words, sentences, numbers or other sequences that are the same when read backwards. Create a function that checks whether a data received from the user is a palindrome.

function isPalindrome(data) {
  let editedData = data.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reverseData = editedData.split("").reverse().join("");
  if (editedData === reverseData) {
    return "The entered data is palindrome.";
  } else {
    return "The entered data is not palindrome.";
  }
}

const data = prompt("Enter the Data to be Checked for Palindrome");

const result = isPalindrome(data);
console.log("Result:", result);
