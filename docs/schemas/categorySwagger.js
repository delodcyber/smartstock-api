const categorySchema = {
    Category: {
        type: "object",

        properties: {
            categoryCode: {
                type: "string",
                example: "CAT-000001",
                readOnly: true
            },

            name: {
                type: "string",
                example: "Laptops"
            },

            description: {
                type: "string",
                example: "Portable computers for personal and business use"
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
        },

        required: [
            "name"
        ]
    }
};

export { categorySchema };