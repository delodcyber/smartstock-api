const inventoryTransactionSchema = {
    InventoryTransaction: {
        type: "object",
        required: [
            "product",
            "transactionType",
            "quantity"
        ],
        properties: {
            _id: {
                type: "string",
                example: "6a722ef73cd45c644bab868b"
            },

            product: {
                type: "string",
                description: "MongoDB ObjectId of the product",
                example: "6a722ef73cd45c644bab868b"
            },

            transactionType: {
                type: "string",
                enum: [
                    "RESTOCK",
                    "SALE",
                    "ADJUSTMENT"
                ],
                example: "RESTOCK"
            },

            quantity: {
                type: "integer",
                minimum: 1,
                example: 10
            },

            note: {
                type: "string",
                example: "Monthly supplier restock"
            },

            createdAt: {
                type: "string",
                format: "date-time"
            },

            updatedAt: {
                type: "string",
                format: "date-time"
            }
        }
    }
};

export { inventoryTransactionSchema };