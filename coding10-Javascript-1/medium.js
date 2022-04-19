/////MEDIUM: Write a program to tell if someone is shouting
////(typing in all caps), whispering (typing in all lowercase), or neither.
////Use prompt to get user input, and then console log whether
///the user was shouting, whispering, or talking normally.

function personTone() {
  let userInput = prompt("type your name ");
  let inputUpper = input.toUpperCase();
  let inputLower = input.toLowerCase();

  if (userInput === inputUpper) {
    prompt("Stop Shouting");
    return;
  } else userInput === inputLower;
  prompt("do not whisper");
  return;
}
console.log("Thank you for not shouting and not whispering!");
personTone();
