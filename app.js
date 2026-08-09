import express from "express";
import passport from "passport";
import { configurePassport } from "./config/passport.js";
import { productRoutes } from "./routes/productRoutes.js";
import { supplierRoutes } from "./routes/supplierRoutes.js";
import { categoryRoutes } from "./routes/categoryRoutes.js";
import { inventoryTransactionRoutes } from "./routes/inventoryTransactionRoutes.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";
import { authRoutes } from "./routes/auth.js";

const app = express();

configurePassport();

app.use(express.json());

app.use(passport.initialize());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/suppliers", supplierRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use(
    "/api/v1/inventory-transactions",
    inventoryTransactionRoutes
);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

export { app };