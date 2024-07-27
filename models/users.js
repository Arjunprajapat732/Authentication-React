import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure emails are unique
        trim: true // Optional: trims whitespace from the email field
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model("User", usersSchema);
