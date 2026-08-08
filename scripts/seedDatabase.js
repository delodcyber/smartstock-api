import dotenv from "dotenv";
import mongoose from "mongoose";

import { connectDB } from "../config/db.js";

import { Category } from "../models/category.js";
import { Supplier } from "../models/supplier.js";
import { Product } from "../models/product.js";
import { InventoryTransaction } from "../models/inventoryTransaction.js";

import { categories } from "./data/categories.js";
import { suppliers } from "./data/suppliers.js";
import { products } from "./data/products.js";
import { inventoryTransactions } from "./data/inventoryTransactions.js";

dotenv.config();

const seedDatabase = async () => {
    try {
        await connectDB();
        console.log("Connected to MongoDB.");

        // Clear existing inventory data
        await Product.deleteMany();
        await Supplier.deleteMany();
        await Category.deleteMany();
        await InventoryTransaction.deleteMany();

        console.log("Existing inventory data cleared.");

        // Seed Categories
        const categoryDocuments = [];

        for (const category of categories) {
            const savedCategory = await Category.create(category);
            categoryDocuments.push(savedCategory);
        }
        console.log(`${categoryDocuments.length} categories seeded.`);

        // Seed Suppliers
        const supplierDocuments = [];

        for (const supplier of suppliers) {
            const savedSupplier = await Supplier.create(supplier);
            supplierDocuments.push(savedSupplier);
        }
        console.log(`${supplierDocuments.length} suppliers seeded.`);

        // Create lookup maps
        const categoryMap = Object.fromEntries(
            categoryDocuments.map(category => [
                category.name,
                category._id
            ])
        );

        const supplierMap = Object.fromEntries(
            supplierDocuments.map(supplier => [
                supplier.companyName,
                supplier._id
            ])
        );

        // Attach ObjectIds to products
        const formattedProducts = products.map(product => ({
            ...product,
            category: categoryMap[product.category],
            supplier: supplierMap[product.supplier]
        }));

        // Seed Products
        const productDocuments = [];
        for (const product of formattedProducts) {
            const savedProduct = await Product.create(product);
            productDocuments.push(savedProduct);
        }

        console.log(`${productDocuments.length} products seeded.`);

        // Seed Inventory Transactions
        const transactionDocuments = [];

        for (const transaction of inventoryTransactions) {
            const product = productDocuments.find(
                product => product.sku === transaction.sku
            );

            if (!product) {
                throw new Error(
                    `Product with SKU ${transaction.sku} was not found.`
                );
            }

            const savedTransaction = await InventoryTransaction.create({
                product: product._id,
                transactionType: transaction.transactionType,
                quantity: transaction.quantity,
                note: transaction.note
            });

            transactionDocuments.push(savedTransaction);
        }

        console.log(
            `${transactionDocuments.length} inventory transactions seeded.`
        );
        console.log("Database seeded successfully.");

    } catch (error) {
        console.error("Database seeding failed.");
        console.error(error);

    } finally {
        await mongoose.connection.close();
        console.log("Database connection closed.");
    }
};


seedDatabase();