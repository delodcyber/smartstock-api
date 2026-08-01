const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
{
    categoryName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    description: {
        type: String,
        trim: true
    },

    isActive: {
        type: Boolean,
        default: true
    }
},
{
    collection: "categories",
    timestamps: true
});

module.exports = mongoose.model("Category", categorySchema);