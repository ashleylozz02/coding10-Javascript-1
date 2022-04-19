/////EASY: Create two variables and assign a person’s name to each.
///Console log a statement that says which name is shorter or longer,
///and by how many characters.
/// Example output: “The name Thomas is longer than John by 2 characters”)
let name1 = "Thomas";
let name2 = "John";
let nmlenght1 = name1.length;
let nmlenght2 = name2.length;
console.log(
  `The name ${name1}is longer than ${name2} by ${
    nmlenght1 - nmlenght2
  } characters`
);
