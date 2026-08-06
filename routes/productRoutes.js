/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management endpoints
 */

import express from "express";
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve all active products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products retrieved successfully.
 */
router.get("/", getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Retrieve a product by its ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the product
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product retrieved successfully.
 *       404:
 *         description: Product not found.
 */
router.get("/:id", getProductById);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created successfully.
 *       400:
 *         description: Validation error.
 */
router.post("/", createProduct);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update an existing product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *       404:
 *         description: Product not found.
 */
router.put("/:id", updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Soft delete a product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the product
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 *       404:
 *         description: Product not found.
 */
router.delete("/:id", deleteProduct);


export { router as productRoutes };