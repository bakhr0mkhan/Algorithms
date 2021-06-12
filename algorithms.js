// Stacks
//palindrome example
//

var letters = [];

var word = "racecar";

var rword = "";

// loop the original word
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// loop the array and reverse the word

for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

// check if it is  a palindrome
if (rword === word) {
  console.log(word, "is a plaindrome");
} else {
  console.log(word, "is not a palindrome");
}
