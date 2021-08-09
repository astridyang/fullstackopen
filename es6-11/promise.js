const fs = require("fs");

// fs.readFile('./为学.md',(err, data)=>{
//   if(err) throw err
//   console.log(data.toString())
// })

const p = new Promise(function (resolve, reject) {
  fs.readFile("./resourse/为学.md1", (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
});
p.then((data) => {
  return new Promise(function (resolve, reject) {
    fs.readFile("./resourse/books.md", (err, data2) => {
      if (err) reject(err);
      resolve(data + "\r\n" + data2);
    });
  });
})
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.warn("catch error: ", reason);
  });
