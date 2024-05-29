const { default: mongoose } = require("mongoose");
const userModel = require("./userModel");

//methods
const getAllUsersFromDB = async () => {
  const allUsers = await userModel.find();
  return allUsers;
};

const createNewUser = async (userDetails) => {
  const userModelData = new userModel();
  userModelData.name = userDetails.name;
  userModelData.address = userDetails.address;
  userModelData.phone = userDetails.phone;
  const newUser = await userModel.create(userModelData);
  return newUser;
};

const updateUserById = async (userId, userDetails) => {
  const updatedUser = await userModel.findByIdAndUpdate(userId, userDetails);
  return updatedUser;
};

const deleteUserById = async (userId) => {
  const deletedUser = await userModel.findByIdAndDelete(userId);
  return deletedUser;
};

module.exports = {
  getAllUsersFromDB,
  createNewUser,
  updateUserById,
  deleteUserById,
};
