import mongoose from "mongoose";
import { toTitleCase } from "../utils/stringHelpers.js";
import { generateCode } from "../utils/generateCode.js";

const categorySchema = new mongoose.Schema(
    {
        categoryCode: {
            type: String,
            required: [true, "Category code is required"],
            unique: true,
            uppercase: true,
            trim: true,
            minlength: [10, "Category code must be exactly 10 characters long"],
            maxlength: [10, "Category code must be exactly 10 characters long"],
            match: [
                /^CAT-\d{6}$/,
                "Category code must follow the format CAT-000001"
            ]
        },

        name: {
            type: String,
            required: [true, "Category name is required"],
            unique: true,
            trim: true,
            minlength: [2, "Category name must be at least 2 characters long"],
            maxlength: [100, "Category name cannot exceed 100 characters"],
            set: toTitleCase
        },

        description: {
            type: String,
            trim: true,
            set: toTitleCase
        },

        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        collection: "categories",
        timestamps: true
    }
);

categorySchema.pre("validate", async function () {

    if (!this.categoryCode) {
        this.categoryCode = await generateCode(
            mongoose.model("Category"),
            "categoryCode",
            "CAT"
        );
    }

});

const Category = mongoose.model("Category", categorySchema);

export { Category };