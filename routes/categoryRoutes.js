/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Category management endpoints
 */
import express from "express";
import {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} from "../controllers/categoryController.js";

const router = express.Router();

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Retrieve all active categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of categories retrieved successfully.
 */
router.get("/", getAllCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Retrieve a category by its ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the category
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Category retrieved successfully.
 *       404:
 *         description: Category not found.
 */
router.get("/:id", getCategoryById);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Category created successfully.
 *       400:
 *         description: Validation error.
 */
router.post("/", createCategory);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Update an existing category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the category
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Category updated successfully.
 *       404:
 *         description: Category not found.
 */
router.put("/:id", updateCategory);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Soft delete a category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: MongoDB ObjectId of the category
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Category deleted successfully.
 *       404:
 *         description: Category not found.
 */
router.delete("/:id", deleteCategory);

export { router as categoryRoutes };