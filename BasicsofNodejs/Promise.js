const { readFile } = require("fs");

const readText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

readText("./BasicsofNodejs/content/first.txt")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });


  // const { readFile, writeFile } = require("fs");
  // const util = require("util");
  // const gettextfile = util.promisify(readFile);
  // const writetxtfile = util.promisify(writeFile);

  // const readText = (path) => {
  //   return new Promise((resolve, reject) => {
  //     readFile(path, "utf8", (err, data) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(data);
  //     });
  //   });
  // };

  // // readText("./BasicsofNodejs/content/first.txt")
  // //   .then((result) => {
  // //     console.log(result);
  // //   })
  // //   .catch((err) => {
  // //     console.log(err);
  // //   });

  // const Writethetext = (path, data) => {
  //   return new Promise((resolve, reject) => {
  //     writeFile(path, data, (err, data) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(data);
  //       }
  //     });
  //   });
  // };

  // const start = async () => {
  //   try {
  //     const first = await gettextfile(
  //       "./BasicsofNodejs/content/first.txt",
  //       "utf8"
  //     );
  //     const second = await gettextfile(
  //       "./BasicsofNodejs/content/subfolder/second.txt",
  //       "utf8"
  //     );

  //     await writetxtfile(
  //       "./BasicsofNodejs/content/subfolder/result1.txt",
  //       `This is awesome : ${first} and this is : ${second}`
  //     );

  //     // const data = first + second;
  //     // const writetext = await Writethetext(
  //     //   "./BasicsofNodejs/content/subfolder/result.txt",
  //     //   data
  //     // );
  //     // console.log(writetext);
  //   } catch (err) {
  //     console.log("the error is", err);
  //   }
  // };

  // start();