import mongoose from "mongoose";
import { EMAIL_REGEX, PHONE_REGEX } from "../utils/regex.js";
import { toTitleCase } from "../utils/stringHelpers.js";
import { generateCode } from "../utils/generateCode.js"

const supplierSchema = new mongoose.Schema(
    {
        supplierCode: {
            type: String,
            required: [true, "Supplier code is required"],
            unique: true,
            uppercase: true,
            trim: true,
            minlength: [10, "Supplier code must be exactly 10 characters long"],
            maxlength: [10, "Supplier code must be exactly 10 characters long"],
            match: [
                /^SUP-\d{6}$/,
                "Supplier code must follow the format SUP-000001"
            ]
        },

        companyName: {
            type: String,
            required: [true, "Company name is required"],
            trim: true,
            minlength: [2, "Company name must be at least 2 characters long"],
            maxlength: [100, "Company name cannot exceed 100 characters"],
            set: toTitleCase
        },

        contactPerson: {
            type: String,
            required: [true, "Contact person is required"],
            trim: true,
            minlength: [2, "Contact person must be at least 2 characters long"],
            maxlength: [100, "Contact person cannot exceed 100 characters"],
            set: toTitleCase
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true,
            match: [
                EMAIL_REGEX,
                "Please enter a valid email address"
            ]
        },

        phone: {
            type: String,
            required: [true, "Phone number is required"],
            trim: true,
            match: [
                PHONE_REGEX,
                "Please enter a valid phone number"
            ]
        },

        address: {
            type: String,
            trim: true,
            set: toTitleCase
        },

        city: {
            type: String,
            trim: true,
            set: toTitleCase
        },

        state: {
            type: String,
            trim: true,
            set: toTitleCase
        },

        country: {
            type: String,
            required: [true, "Country is required"],
            trim: true,
            set: toTitleCase
        },

        joinedDate: {
            type: Date,
            default: Date.now
        },

        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        collection: "suppliers",
        timestamps: true
    }
);

supplierSchema.pre("validate", async function (next) {

    if (!this.supplierCode) {
        this.supplierCode = await generateCode(
            mongoose.model("Supplier"),
            "supplierCode",
            "SUP"
        );
    }
});

const Supplier = mongoose.model("Supplier", supplierSchema);

export { Supplier } 