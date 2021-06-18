var express = require("express");
var router = express.Router();

//TODOS
const todos = require("./todos");
// USERS
const users = require("./users");

router.use("/todos", todos);
router.use("/users", users);

module.exports = router;
