import { generateToken } from "../utils/jwt"


const githubCallback = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                message: "Authentication failed."
            });
        }
        
        const token = generateToken(req.user);
        return res.status(200).json({
            message: "Authentication Successful",
            token: token,
            user: {
                id: req.user._id,
                username: req.user.username,
                role: req.user.role
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error.",
            error: error.message
        });
    }
};

export { githubCallback };