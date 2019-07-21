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

function doWhileLoop(number) {
  function incrementVariable() {
    return Math.random() >=.05
  }
}
do {console.log("I run once regardless."); }
  while (incrementVariable() < number);

