const {readFile} = require('fs');

console.log('started a first task');

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("first task is completed");
});


console.log('starting the next task');