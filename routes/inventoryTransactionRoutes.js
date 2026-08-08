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

const router = express.Router();

/**
 * @swagger
 * /inventory-transactions:
 *   get:
 *     summary: Retrieve all inventory transactions
 *     tags: [Inventory Transactions]
 *     responses:
 *       200:
 *         description: Inventory transactions retrieved successfully.
 *       500:
 *         description: Server error.
 */
router.get("/", getAllTransactions);

/**
 * @swagger
 * /inventory-transactions/{id}:
 *   get:
 *     summary: Retrieve an inventory transaction by ID
 *     tags: [Inventory Transactions]
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
router.get("/:id", getTransactionById);

/**
 * @swagger
 * /inventory-transactions:
 *   post:
 *     summary: Create an inventory transaction
 *     tags: [Inventory Transactions]
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
router.post("/", createTransaction);

/**
 * @swagger
 * /inventory-transactions/{id}:
 *   put:
 *     summary: Update an inventory transaction
 *     tags: [Inventory Transactions]
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
router.put("/:id", updateTransaction);

/**
 * @swagger
 * /inventory-transactions/{id}:
 *   delete:
 *     summary: Delete an inventory transaction
 *     tags: [Inventory Transactions]
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
router.delete("/:id", deleteTransaction);

export { router as inventoryTransactionRoutes };