import express from "express";
import passport from "passport";

import { githubCallback } from "../controllers/authController.js";

const router = express.Router();

// Start GitHub OAuth authentication
router.get(
    "/github",
    passport.authenticate("github", {
        scope: ["user:email"]
    })
);

// GitHub OAuth callback
router.get(
    "/github/callback",
    passport.authenticate("github", {
        session: false,
        failureRedirect: "/api/v1/auth/github/failure"
    }),
    githubCallback
);

// OAuth authentication failure
router.get("/github/failure", (req, res) => {
    res.status(401).json({
        success: false,
        message: "GitHub authentication failed."
    });
});

export { router as authRoutes };