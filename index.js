const express = require("express");
const router = require("./routes");

const app = express();

app.use(express.json());

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
app.use("/", router);

app.listen(3000, () => {
  console.log("App is Running");
});
