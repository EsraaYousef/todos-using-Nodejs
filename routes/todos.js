var express = require("express");
var router = express.Router();
const todos = require("../controllers/todos");

//GET
router.get("/", (req, res) => {
  res.send("TODOS Get method working well");
});

//POST
router.post("/", (req, res) => {
  const { body } = req;
  todos.createTodo(body);
  res.status(204).end;
});

//GET
router.get("/", async (req, res) => {
  const allTodos = await todos.getAllTodos();
  res.json(allTodos);
});

//DELETE
router.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  await todos.deleteTodoById(id);
  res.status(204).end();
});

//PATCH
router.patch("/todos/:id", async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  await todos.editTodoById(id, body);
  res.status(204).end();
});

//GET BY ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await todos.getTodoById(id);
  if (!todo) {
    res.status(404).end();
    return;
  }
  res.json(todo);
});

module.exports = router;
