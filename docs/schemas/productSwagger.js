const productSchema = {
    Product: {
        type: "object",

        required: [
            "name",
            "category",
            "supplier",
            "costPrice",
            "unitPrice",
            "quantityInStock",
            "unit"
        ],

        properties: {
            sku: {
                type: "string",
                example: "PRD-000001",
                readOnly: true,
                description: "Automatically generated product SKU"
            },

            name: {
                type: "string",
                example: "Dell XPS 15"
            },

            description: {
                type: "string",
                example: "15-inch premium performance laptop"
            },

            category: {
                type: "string",
                example: "6890dca48d347cb09fd4d0ab",
                description: "Category ObjectId"
            },

            supplier: {
                type: "string",
                example: "6890dca48d347cb09fd4d0ac",
                description: "Supplier ObjectId"
            },

            costPrice: {
                type: "number",
                example: 1650.00
            },

            unitPrice: {
                type: "number",
                example: 1999.99
            },

            quantityInStock: {
                type: "integer",
                example: 18
            },

            unit: {
                type: "string",
                example: "pieces"
            },

            isActive: {
                type: "boolean",
                example: true
            },

            createdAt: {
                type: "string",
                format: "date-time",
                readOnly: true
            },

            updatedAt: {
                type: "string",
                format: "date-time",
                readOnly: true
            }
        }
    }
};

export { productSchema };