import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "1d"
    });

    res.cookie("jwt", token, {
        maxAge: 24 * 60 * 60 * 1000, // miliseconds
        httpOnly: true, // for security
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    })
}

export default generateToken;