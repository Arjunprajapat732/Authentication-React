import userModel from "../../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createJwtToken = (user) => jwt.sign(
    { id: user._id, email: user.email },
    "e-comm",
    { expiresIn: "5m" }
);

async function RegisterUser(req, res) {
    const { fullName, email, password, confirmPassword } = req.body;

    try {
        const userExist = await userModel.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email already registered" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password and Confirm Password do not match" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            fullName,
            email,
            password: hashPassword
        });
        await newUser.save();

        const token = createJwtToken(newUser);
        return res.status(201).json({ message: "User registered successfully", token });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}

export default RegisterUser;