import User from "../models/userModel.js";

export const getUsersForSideBar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        // This will filter the not logged in users.
        const filterUsers = await User.find({_id: {$ne: loggedInUserId}}).select('-password');

        res.status(200).json(filterUsers);
    } catch (error) {
        console.log("Error in userController!", error);
        res.status(500).json({message: "Internal server error!"});
    }
};