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




//charAt(x) Returns the character at the “x” position within the string.(it also includes spaces)
var myString = 'Js is Great!!!';
console.log(myString.charAt(6));
//output :G

//indexOf(char/substring) indexOf(substr, [start]) Searches and (if found) returns the index number of the searched character or substring within the string. If not found, -1 is returned. “Start” is an optional argument specifying the position within string to begin the search. Default is 0.


var sentence="Hi, my name is Kartik!"
if (sentence.indexOf("Kartik")!==-1)
alert("Kartik is in there!");



// slice(start, [end]) Returns a substring of the string based on the “start” and “end” index arguments, NOT including the “end” index itself. “End” is optional, and if none is specified, the slice includes all characters from “start” to end of string.
var text="excellent";
var text1,text2;
text1=text.slice(0,4) //returns "exce" 0 start index and 4 end!

text2=text.slice(2,4) //returns "ce"
console.log(text1)
console.log(text2)


//substr(start, [length]) Returns the characters in a string beginning at “start” and through the specified number of characters, “length”. “Length” is optional, and if omitted, up to the end of the string is assumed.
var text="Awesome"
var subtext1=text.substring(0,4) //returns Awes
var subtext2=text.substring(2,4) //returns "es"
console.log(subtext1);
console.log(subtext2)
