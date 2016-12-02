//wrap entire contents of IIFE


(function (window) {
var helloSpeaker = {}; //create object called helloSpeaker
	
var speakWord = "Hello";

//pass names[i] through hellow.speak (name). names[i] is the argument
helloSpeaker.speak = function (name) { 	//attach speak method to hellospeaker
  console.log(speakWord + " " + name);//rewrite speak method. now attached to helloSpeaker, not standalone
}

	window.helloSpeaker = helloSpeaker; // expose helloSpeaker to global scope
	
})(window);

//IIFE
