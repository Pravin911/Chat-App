import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/gnerateToken.js";

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");
        
        if(!user || !isPasswordCorrect) {
            return res.status(404).json({message: "Invalid username or password"});
        }
        generateToken(user._id, res);
        return res.status(200).json({user, isPasswordCorrect});
    } catch (error) {
        console.log(error);
        res.status(500).json({
            _id: user_id,
            fullName: user?.fullName,
            username: user?.username,
            profilePic: user?.profilePic ,
        });
    }
}

export const signup = async (req, res) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;
        if(password !== confirmPassword) {
            return res.status(400).json({message: "Passwords do not match"});
        }
        const user = await User.findOne({username});
        
        if(user){
            return res.status(400).json({error: "Username already exists"});
        }
        // Hash Passwords
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        // ProfilePic for male: https://avatar.iran.liara.run/public/boy for female: https://avatar.iran.liara.run/public/girl
        const boyProfilePic = "https://avatar.iran.liara.run/public/boy?username=${username}";
        const girlProfilePic = "https://avatar.iran.liara.run/public/girl?username=${username}";

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        if(newUser){
            // Generate JWT Token.
            generateToken(newUser._id, res);
            const savedUser = await newUser.save();
            res.status(201).json({message: "User created", user: savedUser});
        } else {
            res.status(400).json({message: "Invalid user data"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
        console.log(error);
    }
}

export const logout = (req, res) => {
    try {
        res.cookie('jwt', "", {maxAge: 0});
        res.status(200).json({message: "Logged out Successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error!"});
    }
}