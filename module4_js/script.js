var message = "in global"; //string defined as in global
console.log("global: message = " + message); //outputting it into the console

var a = function () {
  var message = "inside a";
  console.log("a: message = " + message);

  function b () {
    console.log("b: message = " + message); 
  }

  b();
}

a();