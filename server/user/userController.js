const userService = require("./userService");

const getAllUsers = async (req, res) => {
  const userData = await userService.getAllUsersFromDB();
  //   console.log(userData)
  res.send({ status: true, data: userData });
};

const createUser = async (req, res) => {
  const userDetails = req.body;
  const newUser = await userService.createNewUser(userDetails);
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

  if (updatedUser) {
    res.send({ status: true, data: updatedUser });
  } else {
    res.send({ status: false, message: "something went wrong " });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  //   console.log(userId);
  const deletedUser = await userService.deleteUserById(userId);
  //   console.log(deletedUser);
  if (deletedUser) {
    res.send({ status: true, data: deletedUser });
  } else {
    res.send({ status: false, message: "something went wrong " });
  }
};

module.exports = { getAllUsers, createUser, deleteUser, updateUser };
