var express = require("express");
var router = express.Router();
const users = require("../controllers/users");

//GET
router.get("/", (req, res) => {
  res.send("USERS Get method working well");
});

//POST
router.post("/", (req, res) => {
  const { body } = req;
  users.createTodo(body);
  res.status(204).end;
});

//GET
router.get("/", async (req, res) => {
  const allUsers = await users.getAllUsers();
  res.json(allUsers);
});

//DELETE
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  await users.deleteTodoById(id);
  res.status(204).end();
});

//PATCH
router.patch("/users/:id", async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  await users.editTodoById(id, body);
  res.status(204).end();
});

//GET BY ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await users.getTodoById(id);
  if (!todo) {
    res.status(404).end();
    return;
  }
  res.json(todo);
});

module.exports = router;
