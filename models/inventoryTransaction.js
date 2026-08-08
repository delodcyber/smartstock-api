import mongoose from "mongoose";

const inventoryTransactionSchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: [true, "Product is required"]
        },

        transactionType: {
            type: String,
            required: [true, "Transaction type is required"],
            enum: {
                values: ["RESTOCK", "SALE", "ADJUSTMENT"],
                message: "{VALUE} is not a valid transaction type"
            }
        },

        quantity: {
            type: Number,
            required: [true, "Transaction quantity is required"],
            min: [1, "Transaction quantity must be at least 1"],
            validate: {
                validator: Number.isInteger,
                message: "Transaction quantity must be a whole number"
            }
        },

        note: {
            type: String,
            trim: true
        }
    },
    {
        collection: "inventoryTransactions",
        timestamps: true
    }
);

const InventoryTransaction = mongoose.model(
    "InventoryTransaction",
    inventoryTransactionSchema
);

export { InventoryTransaction };