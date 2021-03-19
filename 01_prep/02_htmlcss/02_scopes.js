/**********************************************
 * Scopes: var, let and const
 * ==================================
 ***********************************************/
let globalBinding = 50;

if (true) {
  // defined let here (only can then be accessed by this block)
  let blockScopeBinding = 40;
  // defined var here (can be accessed anywhere else on the document)
  var oldStyleBinding = 10;
  console.log(
    globalBinding + blockScopeBinding + oldStyleBinding
  );
  // => 100
}

// This was defined in the loop, not outside, so can't be accessed here
console.log(blockScopeBinding);

// Var can always be accessed
console.log(globalBinding + oldStyleBinding);

// => 60

/**********************************************
 * Const, Var, Let
 * ==================================
 ***********************************************/
var course = "JavaScript for Beginners";

if (course == "JavaScript for Beginners") {
  const anewvar = "something";
  // can't do this
  anewvar = "Something else";
  console.log(anewvar);
}
