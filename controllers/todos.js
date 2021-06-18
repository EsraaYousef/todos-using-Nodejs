const Todo = require("../models/todos");

const createTodo = (data) => {
  return Todo.create(data).catch(console.log);
};

const getAllTodos = () => {
  return Todo.findAll();
};

const getTodoById = (id) => {
  return Todo.findOne(data, { where: { id }, include: "user" });
};

const editTodoById = (id, data) => {
  return Todo.update(data, { where: { id } });
};

const deleteTodoById = (id) => {
  return Todo.destroy({ where: { id } });
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  editTodoById,
  deleteTodoById,
};
