const express = require("express");
const app = express();

app.use((request, response, next) => {
  console.log("someone request server");
  next();
});

app.get("/cars", (req, res) => {
  const students = [
    {
      id: "001",
      name: "bmw",
      price: 130,
    },
    {
      id: "002",
      name: "benz",
      price: 120,
    },
    {
      id: "003",
      name: "tesla",
      price: 18,
    },
  ];
  res.send(students)
});
app.listen(5001, err=>{
  if(!err) console.log('server 2 launch success on port 5001, the request url is http://localhost:5001')
})
