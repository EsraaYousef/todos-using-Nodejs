const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const User = require("./users");

const Todo = sequelize.define("todos", {
  content: {
    type: DataTypes.STRING,
  },
});

Todo.belongsTo(User);

Todo.sync({ force: true, alter: true });

module.exports = Todo;
