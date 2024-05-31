const mongoose = require('mongoose');
const User = require('./userModel'); // Assuming userModel defines the User schema

// Error Handling Function (Optional)
const handleError = (err, res) => {
  console.error(err);
  res.status(500).json({ status: false, message: "Internal Server Error" });
};

// Methods with Error Handling
const getAllUsersFromDB = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw err; // Re-throw for catching in userController
  }
};

const createNewUser = async (userDetails) => {
  try {
    const newUser = new User(userDetails);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (err) {
    throw err; // Re-throw for catching in userController
  }
};

const updateUserById = async (userId, userDetails) => {
  try {
    const options = { new: true }; // Return the updated user
    const updatedUser = await User.findByIdAndUpdate(userId, userDetails, options);
    return updatedUser;
  } catch (err) {
    throw err; // Re-throw for catching in userController
  }
};

const deleteUserById = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  } catch (err) {
    throw err; // Re-throw for catching in userController
  }
};
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (err) {
    throw err; // Re-throw for catching in userController
  }
};

module.exports = {
  getUserById,
  getAllUsersFromDB,
  createNewUser,
  updateUserById,
  deleteUserById,
};
