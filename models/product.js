import mongoose from "mongoose";
import { PRODUCT_UNITS } from "../utils/constants.js";
import { toTitleCase } from "../utils/stringHelpers.js";
import { generateCode } from "../utils/generateCode.js";

const productSchema = new mongoose.Schema({
    sku: {
        type: String,
        required: [true, "Product SKU is required"],
        unique: true,
        uppercase: true,
        trim: true,
        minlength: [10, "Product SKU must be exactly 10 characters long"],
        maxlength: [10, "Product SKU must be exactly 10 characters long"],
        match: [
            /^PRD-\d{6}$/,
            "Product SKU must follow the format PRD-000001"
        ]
    },

    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        minlength: [2, "Product name must be at least 2 characters long"],
        maxlength: [100, "Product name cannot exceed 100 characters"],
        set: toTitleCase
    },

    description: {
        type: String,
        trim: true,
        set: toTitleCase
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Product category is required"]
    },

    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
        required: [true, "Product supplier is required"]
    },

    costPrice: {
        type: Number,
        required: [true, "Cost price is required"],
        min: [0, "Cost price cannot be less than 0"],
        set: value => Number(value.toFixed(2))
    },

    unitPrice: {
        type: Number,
        required: [true, "Unit price is required"],
        min: [0, "Unit price cannot be less than 0"],
        set: value => Number(value.toFixed(2))
    },

    quantityInStock: {
        type: Number,
        required: [true, "Quantity in stock is required"],
        min: [0, "Quantity in stock cannot be less than 0"],
        default: 0,
        validate: {
            validator: Number.isInteger,
            message: "Quantity in stock must be a whole number"
        }
    },

    unit: {
        type: String,
        required: [true, "Unit of measure is required"],
        trim: true,
        lowercase: true,
        enum: {
            values: PRODUCT_UNITS,
            message: "{VALUE} is not a valid unit of measure"
        }
    },

    isActive: {
        type: Boolean,
        default: true
    }
},
    
{
    collection: "products",
    timestamps: true
}
);

productSchema.pre("validate", async function (next) {

    if (!this.SKU) {
        this.SKU = await generateCode(
            mongoose.model("Product"),
            "SKU",
            "PRD"
        );
    }
});

const Product = mongoose.model("Product", productSchema);
export { Product };