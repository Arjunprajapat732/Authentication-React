import express from "express";
import RegisterUser from "../controllers/auth/RegisterController.js";
import LoginUser from "../controllers/auth/LoginController.js";

const router = express.Router();

router.post("/login", LoginUser);
router.post("/register", RegisterUser);

export default router;