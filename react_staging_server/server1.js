const express = require("express");
const app = express();

app.use((request, response, next) => {
  console.log("someone request server");
  console.log('request from: ', request.get('Host'))
  console.log('request url: ', request.url)
  next();
});

app.get("/students", (req, res) => {
  const students = [
    {
      id: "001",
      name: "tom",
      age: 13,
    },
    {
      id: "002",
      name: "jerry",
      age: 20,
    },
    {
      id: "003",
      name: "suni",
      age: 18,
    },
  ];
  res.send(students)
});
app.listen(5000, err=>{
  if(!err) console.log('server 1 launch success on port 5000, the request url is http://localhost:5000')
})
