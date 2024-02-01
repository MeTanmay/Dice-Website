//Custom middleware   :-- Our own middleware

import express from "express";

const app = express();
const port = 3000;


function logger(req,res, next){
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();  // it is to specify that move on to next middleware or the request
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


