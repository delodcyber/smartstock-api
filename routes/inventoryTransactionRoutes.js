/**
 * @swagger
 * tags:
 *   name: Inventory Transactions
 *   description: Inventory transaction management endpoints
 */

import express from "express";
import {
    getAllTransactions,
    getTransactionById,
    createTransaction,
    updateTransaction,
    deleteTransaction
} from "../controllers/inventoryTransactionController.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();

/**
 * @swagger
 * /inventory-transactions:
 *   get:
 *     summary: Retrieve all inventory transactions
 *     tags: [Inventory Transactions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Inventory transactions retrieved successfully.
 *       500:
 *         description: Server error.
 */
router.get("/", authenticate, getAllTransactions);

/**
 * @swagger
 * /inventory-transactions/{id}:
 *   get:
 *     summary: Retrieve an inventory transaction by ID
 *     tags: [Inventory Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the inventory transaction
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Inventory transaction retrieved successfully.
 *       404:
 *         description: Inventory transaction not found.
 *       500:
 *         description: Server error.
 */
router.get("/:id", authenticate, getTransactionById);

/**
 * @swagger
 * /inventory-transactions:
 *   post:
 *     summary: Create an inventory transaction
 *     tags: [Inventory Transactions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/InventoryTransaction'
 *     responses:
 *       201:
 *         description: Inventory transaction created successfully.
 *       400:
 *         description: Validation error.
 */
router.post("/", authenticate, createTransaction);

/**
 * @swagger
 * /inventory-transactions/{id}:
 *   put:
 *     summary: Update an inventory transaction
 *     tags: [Inventory Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the inventory transaction
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/InventoryTransaction'
 *     responses:
 *       200:
 *         description: Inventory transaction updated successfully.
 *       400:
 *         description: Validation error.
 *       404:
 *         description: Inventory transaction not found.
 */
router.put("/:id", authenticate, updateTransaction);

/**
 * @swagger
 * /inventory-transactions/{id}:
 *   delete:
 *     summary: Delete an inventory transaction
 *     tags: [Inventory Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the inventory transaction
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Inventory transaction deleted successfully.
 *       404:
 *         description: Inventory transaction not found.
 *       500:
 *         description: Server error.
 */
router.delete("/:id", authenticate, deleteTransaction);

export { router as inventoryTransactionRoutes };