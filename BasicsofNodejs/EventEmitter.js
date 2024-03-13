const EventEmitter = require("events");
const customEmitted = new EventEmitter();

customEmitted.on("response", (name, id) => {
  console.log(`data recieved ${name} with id: ${id}`);
});
customEmitted.on("response", () => {
  console.log(`data recieved in logic`);
});

// emit allways come after listing the emit... emit has be written in last because if it emits first then it wont print nothing
customEmitted.emit("response", "Stephen", 77);
