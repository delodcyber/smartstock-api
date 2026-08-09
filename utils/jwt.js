import jwt from "jsonwebtoken";

const generateToken = (user) => {
    const payload = {
        id: user._id,
        username: user.username,
        role: user.role
    };
    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
            expiresIn: "2h"
        }
    );
};

const verifyToken = (token) => {
    return jwt.verify(
        token,
        process.env.JWT_SECRET
    );
};

export {
    generateToken,
    verifyToken
};