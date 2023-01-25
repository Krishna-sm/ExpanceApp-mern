const express=require("express");
const { loginController, RagisterController } = require("../controllers/userController");
// creater router object
const router=express.Router();

// routers
// POST || login
router.route("/login").post(loginController);

// POST || Ragister user
router.route("/register").post(RagisterController);

module.exports=router;