const { isUtf8 } = require('buffer');
const {readFileSync , writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf-8')
console.log(first);
const second = readFileSync('./content/subfolder/second.txt' , 'utf-8')
console.log(second)