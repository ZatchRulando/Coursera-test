//wrap entire contents in IIFE

(function (window) {
var byeSpeaker = {}; // create object called bye speaker
var speakWord = "Good Bye";


 byeSpeaker.speak = function (name) { //attach speak object to byeSpeaker. 
  console.log(speakWord + " " + name);//rewrite speak function so that its attached to hellSpeaker object, not just a standalone function
}

	window.byeSpeaker = byeSpeaker; //expose to global scope. name it byespeaker here as well
	//out in gs, won't get overwritten
})(window);
	//immediately call window