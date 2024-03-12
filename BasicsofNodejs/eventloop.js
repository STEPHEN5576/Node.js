console.log('started');

setTimeout(() =>{
console.log("I am callback function which excutes when the main treads finishes its work ,the event loop helps me to exceute");
}, 0)

console.log("end");