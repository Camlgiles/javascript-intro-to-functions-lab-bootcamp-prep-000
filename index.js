function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}


// var uppercase = 'HELLO';
// var lowercase = 'hello';
// var mixedCase = 'Hello';

// if (uppercase === uppercase.toUpperCase()) {
//   return 'YES INDEED!';
// } 

// if (lowercase === lowercase.toLowerCase()) {
//   return `I can't hear you!`;
// }

// if (mixedCase === mixedCase.toUpperCase()) {
//   return 'I love you, too.'
// }



var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false
