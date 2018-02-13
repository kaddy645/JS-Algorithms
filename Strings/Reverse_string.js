// 1. Reverse a String With Built-In Functions

function reverseStringWithBuiltInFunctions(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "kartik".split("");
    // ["k", "a", "r", "t","i" "k"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["k", "i", "t", "r", "a","k"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray =   // ["k", "i", "t", "r", "a","k"].join("");
    // "kitrak"
    
    //Step 4. Return the reversed string
    return joinArray; // "kitrak"
}
 
reverseStringWithBuiltInFunctions("kartik")




// 2. Reverse a String With a Decrementing For Loop

function reverseStringWithLoop(str) {
    // Step 1. Create an empty string that will host the new created string
    var newString = "";
 
    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/
 
    // Step 3. Return the reversed string
    return newString; // "olleh"
}

reverseStringWithLoop("hello");




// 3. Reverse a String With Recursion


function reverseStringWithRecursion(str) {
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  /* 
  First Part of the recursion method
  You need to remember that you won’t have just one call, you’ll have several nested calls
  Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
  1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
  2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
  3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
  4th call – reverseString("lo")      will return   reverseString("o")              + "l"
  5th call – reverseString("o")       will return   reverseString("")               + "o"
  Second part of the recursion method
  The method hits the if condition and the most highly nested call returns immediately
  5th call will return reverseString("") + "o" = "o"
  4th call will return reverseString("o") + "l" = "o" + "l"
  3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
  2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
  */
  }
  reverseStringWithRecursion("hello");




  // 4  Incrementing for-loop with array pushing and charAt


  function reverse(s) {
    var o = [];
    for (var i = 0, len = s.length; i <= len; i++)
      o.push(s.charAt(len - i));
    return o.join('');
  }


  // 5 Decrementing while-loop with concatenation and substring

  function reverse(s) {
    var i = s.length,
        o = '';
    while (i > 0) {
      o += s.substring(i - 1, i);
      i--;
    }
    return o;
  }


  // 6 Internal function recursion


  function reverse(s) {
    function rev(s, len, o) {
      return (len === 0) ? o : rev(s, --len, (o += s[len]));
    };
    return rev(s, s.length, '');
  }



  // 7  Half-index switch for-loop

  function reverse(s) {
    s = s.split('');
    var len = s.length,
        halfIndex = Math.floor(len / 2) - 1,
        tmp;
    for (var i = 0; i <= halfIndex; i++) {
      tmp = s[len - i - 1];
      s[len - i - 1] = s[i];
      s[i] = tmp;
    }
    return s.join('');
  }