/**
 * @swagger
 * tags:
 *   name: Suppliers
 *   description: Supplier management endpoints
 */

import express from "express";
import {
    getAllSuppliers,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
} from "../controllers/supplierController.js";
import { authenticate } from "../middleware/auth.js"

const router = express.Router();

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Retrieve all active suppliers
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: List of suppliers retrieved successfully.
 */
router.get("/", getAllSuppliers);

/**
 * @swagger
 * /suppliers/{id}:
 *   get:
 *     summary: Retrieve a supplier by its ID
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the supplier
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Supplier retrieved successfully.
 *       404:
 *         description: Supplier not found.
 */
router.get("/:id", getSupplierById);

/**
 * @swagger
 * /suppliers:
 *   post:
 *     summary: Create a new supplier
 *     tags: [Suppliers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       201:
 *         description: Supplier created successfully.
 *       400:
 *         description: Validation error.
 */
router.post("/", authenticate, createSupplier);

/**
 * @swagger
 * /suppliers/{id}:
 *   put:
 *     summary: Update an existing supplier
 *     tags: [Suppliers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the supplier
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       200:
 *         description: Supplier updated successfully.
 *       404:
 *         description: Supplier not found.
 */
router.put("/:id", authenticate, updateSupplier);

/**
 * @swagger
 * /suppliers/{id}:
 *   delete:
 *     summary: Soft delete a supplier
 *     tags: [Suppliers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the supplier
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Supplier deleted successfully.
 *       404:
 *         description: Supplier not found.
 */
router.delete("/:id", authenticate, deleteSupplier);


export { router as supplierRoutes };