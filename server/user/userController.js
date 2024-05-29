const userService = require("./userService");

const getAllUsers = async (req, res) => {
  const userData = await userService.getAllUsersFromDB();
  //   console.log(userData)
  res.send({ status: true, data: userData });
};

const createUser = async (req, res) => {
  const newUser = req.body;
  await userService.createNewUser(newUser);
  res.send({ status: true, data: newUser });
  // console.log(newUser);
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  //   console.log(userId);
  const userDetails = req.body;
  //   console.log(userDetails);
  const updatedUser = await userService.updateUserById(userId, userDetails);
  //   console.log(updatedUser);
  res.send({ status: true, data: updatedUser });
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  const deletedUser = await userService.deleteUserById(userId);
  console.log(deletedUser);
  res.send({ status: true, data: deletedUser });
};





module.exports = { getAllUsers, createUser, deleteUser, updateUser };
