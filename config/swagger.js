import dotenv from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";
import { productSchema } from "../docs/schemas/productSwagger.js";
import { supplierSchema } from "../docs/schemas/supplierSwagger.js";
import { categorySchema } from "../docs/schemas/categorySwagger.js";
import { inventoryTransactionSchema } from "../docs/schemas/inventoryTransactionSwagger.js";

dotenv.config();


const options = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "SmartStock Inventory API",
            version: "1.0.0",
            description:
                "REST API for managing products, suppliers, and categories."
        },

        servers: [
            {
                url: `${process.env.APP_URL}/api/v1`,
                description: "SmartStock API"
            }
        ],

        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                    description:
                        "Enter the JWT returned after successful GitHub authentication."
                }
            },
            
            schemas: {
                ...productSchema,
                ...supplierSchema,
                ...categorySchema,
                ...inventoryTransactionSchema
            }
        }
    },

    apis: [
        "./routes/*.js",
        "./models/*.js"
    ]
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec };

