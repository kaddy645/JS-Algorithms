// 1. charAt(x) Returns the character at the “x” position within the string.

var myString = 'String Kartik!!!';
console.log(myString.charAt(7));
//output: K



// 2. charCodeAt(x) Returns the Unicode value of the character at position “x” within the string.

var message="KartikTesting"
alert(message.charAt(0))
//alerts "K"


// 3 concat(v1, v2,…) Combines one or more strings (arguments v1, v2 etc) into the existing one and returns the combined string

var message="Javascript"
var final=message.concat(" is a"," beautiful language.")

alert(final)

//alerts "Javascript is a"," beautiful language."




// 4  match(regexp) Executes a search for a match within a string based on a regular expression. It returns an array of information or null if no match is found.

//match(regexp) //select integers only
var intRegex = /[0-9 -()+]+$/;  

var myNumber = '999';
var myInt = myNumber.match(intRegex);
console.log(isInt);
//output: 999

var myString = '999 JS Coders';
var myInt = myString.match(intRegex);
console.log(isInt);
//output: null



// 5 search(regexp) Tests for a match in a string. It returns the index of the match, or -1 if not found.



//search(regexp)
var intRegex = /[0-9 -()+]+$/;  

var myNumber = '999';
var isInt = myNumber.search(intRegex);
console.log(isInt);
//output: 0

var myString = '999 JS Coders';
var isInt = myString.search(intRegex);
console.log(isInt);
//output: -1