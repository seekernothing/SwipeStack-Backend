const express = require("express");
const app = express();
const PORT = 8000;

app.get("/users/:userId/:name/:password", (req, res) => {
    console.log(req.params)
  res.send({firstName:"Abhishek",lastname:"Biradar"});
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
