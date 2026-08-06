const supplierSchema = {
    Supplier: {
        type: "object",

        properties: {
            supplierCode: {
                type: "string",
                example: "SUP-000001",
                readOnly: true
            },

            companyName: {
                type: "string",
                example: "Dell Technologies"
            },

            contactPerson: {
                type: "string",
                example: "Michael Johnson"
            },

            email: {
                type: "string",
                format: "email",
                example: "michael.johnson@dell.com"
            },

            phone: {
                type: "string",
                example: "+1-512-555-1001"
            },

            address: {
                type: "string",
                example: "One Dell Way"
            },

            city: {
                type: "string",
                example: "Round Rock"
            },

            state: {
                type: "string",
                example: "Texas"
            },

            country: {
                type: "string",
                example: "United States"
            },

            joinedDate: {
                type: "string",
                format: "date-time",
                readOnly: true
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
            "companyName",
            "contactPerson",
            "email",
            "phone",
            "country"
        ]
    }
};

export { supplierSchema };