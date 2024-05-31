const userService = require("./userService");

const getAllUsers = async (req, res) => {
  try {
    const userData = await userService.getAllUsersFromDB();
    res.status(200).json({ status: true, data: userData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Error fetching users" });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
    res.status(200).json({ status: true, data: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Error fetching user" });
  }
};

const createUser = async (req, res) => {
  try {
    const userDetails = req.body;
    const newUser = await userService.createNewUser(userDetails);
    res.status(201).json({ status: true, data: newUser });
  } catch (err) {
    console.error(err);
    res.status(400).json({ status: false, message: "Error creating user" }); // 400 for bad request (invalid data)
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userDetails = req.body;
    const updatedUser = await userService.updateUserById(userId, userDetails);
    if (!updatedUser) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
    res.status(200).json({ status: true, data: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Error updating user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await userService.deleteUserById(userId);
    if (!deletedUser) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
    res.status(200).json({ status: true, message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, message: "Error deleting user" });
  }
};

module.exports = { getAllUsers, createUser, deleteUser, updateUser, getUserById };
