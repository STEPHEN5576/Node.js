const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my Home page");
  } else if (req.url === "/about") {
    res.end("This is the about page");
  } else {
    res.end(`
 <h1>Oops!</h1>
 <p>We can't seem to find the page you are looking for</p>
 <a href="/">back Home</a>`);
  }
});

server.listen(5000);


//  used by class http.server it has the event request so i could say .on
// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//   res.end("Welcome");
// });

// server.listen(5000);