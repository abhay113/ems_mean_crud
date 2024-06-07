const express = require("express");
const router = express.Router();
const userController = require("../user/userController");

router.get("/getall", userController.getAllUsers);
router.get("/get/:id", userController.getUserById);
router.post("/create",userController.createUser);
router.patch('/update/:id',userController.updateUser);
router.delete('/delete/:id',userController.deleteUser);

module.exports = router;
