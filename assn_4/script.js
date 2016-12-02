
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


// Loop over the names array and say either 'Hello' or "Good Bye"
// using the 'speak' method or either helloSpeaker's or byeSpeaker's
// 'speak' method.
// See Lecture 50, part 1
for (var i = 0; i < names.length; i++) {

  
  // Retrieve the first letter of the current name in the loop.
  // Use the string object's 'charAt' function. Since we are looking for
  // names that start with either upper case or lower case 'J'/'j', call
  // string object's 'toLowerCase' method on the result so we can compare
  // to lower case character 'j' afterwards.
  // Look up these methods on Mozilla Developer Network web site if needed.
  var firstLetter = names[i].charAt(0).toLowerCase();
    //run loop i through every value in array names

  
  // Compare the 'firstLetter' retrieved in STEP 11 to lower case
  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
  // name in the loop.
  if (firstLetter === 'j') { //if first letter is j, call byespeaker 
    window.byeSpeaker.speak(names[i]);
  } else {
    window.helloSpeaker.speak(names[i]); //else call byespeaker
  }
}

})();