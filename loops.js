function forLoop(array) {
  for (i = 0; i < 25; ++i) {
    if (i === 1) {
      console.log("I am 1 strange loop."); }
      else {
        console.log("I am "+i+" strange loops.");
      }
  }
  return array;
}

function whileLoop(number)   {while (number > 0) {
  console.log(--number);}
  return "done";
 }

function doWhileLoop(num) {
  function incrementVariable() {
    return Math.random() >=10
  }
}
do {console.log("I run once regardless."); }
  while (incrementVariable() < num);
