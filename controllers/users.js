const User = require("../models/users");

const createUser = (data) => {
  return User.create(data).catch(console.log);
};

const getAllUsers = () => {
  return User.findAll();
};

const getUserById = (id) => {
  return User.findOne(data, { where: { id } });
};

const editUserById = (id, data) => {
  return User.update(data, { where: { id } });
};

const deleteUserById = (id) => {
  return User.destroy({ where: { id } });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  editUserById,
  deleteUserById,
};
