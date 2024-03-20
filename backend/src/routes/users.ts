import express, {Request, Response} from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";

const router = express.Router();

// /api/users/register
router.post("/register", async (req: Request, res: Response) => {
    try {
        let user = await User.findOne({
            email: req.body.email,
        });

        // Verify the User
        if (user) {
            return res.status(400).json({ message: "User already exists"})
        }

        // Save New User
        user = new User(req.body);
        await user.save();

        // Generate JWT token with User ID
        const token = jwt.sign(
            {userId: user.id}, 
            process.env.JWT_SECRET_KEY as string,
            {
                expiresIn: "1d",
            }
        );
        
        // Generate the Cookie with Token
        res.cookie("auth token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000,
        });

        // Send the Success Status to the Frontend
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Something went wrong!"});
    }
});

export default router;