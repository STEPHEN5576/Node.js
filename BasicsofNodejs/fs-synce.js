const { isUtf8 } = require("buffer");
const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
console.log(first);
const second = readFileSync("./content/subfolder/second.txt", "utf-8");
console.log(second);

writeFileSync(
  "./content/subfolder/result.txt",
  `This is the result : ${first} , ${second}`
);

console.log("done with this task");
console.log("starting with the new task");
