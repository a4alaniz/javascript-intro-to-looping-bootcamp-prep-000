function forloop(array) {
  for (i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am a strange loop."); }
      else {
        array.push("I am ${i} strange loops.");
      }
  }
  return array
}

var n = 25
function whileLoop(n)   {while (n > 0) {
  console.log(--n);
  if (n = 0) {return "done"};
  }
 }
