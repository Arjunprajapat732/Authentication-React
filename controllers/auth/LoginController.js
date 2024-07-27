import userModel from "../../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Secret for JWT

async function LoginUser(req, res) {
    try {
        const { email, password } = req.body;

        const existUser = await userModel.findOne({ email });
        if (!existUser) {
            return res.status(404).json({ message: "User does not exist" });
        }

        const matchPassword = await bcrypt.compare(password, existUser.password);
        if (!matchPassword) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { userId: existUser._id, email: existUser.email },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: "Login successful",
            token
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });
    }
}

export default LoginUser;
