import mongoose from "mongoose";

import { toTitleCase } from "../utils/stringHelpers.js";
import {
    EMAIL_REGEX,
    USERNAME_REGEX,
    NAME_REGEX
} from "../utils/validationPatterns.js";
import { USER_ROLES } from "../utils/constants.js";

const userSchema = new mongoose.Schema(
    {
        githubId: {
            type: String,
            required: [true, "GitHub ID is required"],
            unique: true,
            trim: true
        },

        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            trim: true,
            lowercase: true,
            minlength: [3, "Username must be at least 3 characters long"],
            maxlength: [30, "Username cannot exceed 30 characters"],
            match: [
                USERNAME_REGEX,
                "Username may only contain letters, numbers, and hyphens"
            ]
        },

        displayName: {
            type: String,
            required: [true, "Display name is required"],
            trim: true,
            minlength: [2, "Display name must be at least 2 characters long"],
            maxlength: [100, "Display name cannot exceed 100 characters"],
            match: [
                NAME_REGEX,
                "Display name contains invalid characters"
            ],
            set: toTitleCase
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true,
            maxlength: [254, "Email cannot exceed 254 characters"],
            match: [
                EMAIL_REGEX,
                "Please enter a valid email address"
            ]
        },

        avatar: {
            type: String,
            trim: true
        },

        role: {
            type: String,
            required: [true, "User role is required"],
            lowercase: true,
            enum: {
                values: [
                    "admin",
                    "manager",
                    "staff"
                ],
                message: "{VALUE} is not a valid user role"
            },
            default: USER_ROLES.STAFF
        },

        isActive: {
            type: Boolean,
            default: true
        },

        lastLogin: {
            type: Date,
            default: null
        }
    },
    {
        collection: "users",
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

export { User };