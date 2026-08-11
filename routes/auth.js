/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: GitHub OAuth authentication
 */
import express from "express";
import passport from "passport";

import { githubCallback } from "../controllers/authController.js";

const router = express.Router();

// Start GitHub OAuth authentication

/**
 * @swagger
 * /auth/github:
 *   get:
 *     summary: Authenticate with GitHub
 *     description: >
 *       Start GitHub OAuth authentication. Open this URL directly in a web browser
 *       rather than using Swagger's "Try it out" button. After the user authorizes
 *       the application on GitHub, GitHub redirects to the callback endpoint and
 *       the API returns a JWT.
 *       https://smartstock-api-kj1u.onrender.com/api-docs/api/v1/auth/github
 *     tags: [Authentication]
 *     responses:
 *       302:
 *         description: Redirects the browser to GitHub for authentication.
 */
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