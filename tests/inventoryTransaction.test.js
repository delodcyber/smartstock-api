import test, { after } from "node:test";
import assert from "node:assert";
import request from "supertest";
import mongoose from "mongoose";

import { app } from "../app.js";
import { connectDB } from "../config/db.js";
import { InventoryTransaction } from "../models/inventoryTransaction.js";
import { User } from "../models/user.js";
import { generateToken } from "../utils/jwt.js";

await connectDB();

after(async () => {
    await mongoose.connection.close();
});

const user = await User.findOne();

assert.ok(user, "No user found in the database");

const token = generateToken(user);

test(
    "GET /api/v1/inventory-transactions returns all inventory transactions",
    async () => {
        const response = await request(app)
            .get("/api/v1/inventory-transactions")
            .set("Authorization", `Bearer ${token}`);

        assert.strictEqual(response.statusCode, 200);
        assert.strictEqual(response.body.success, true);
        assert.ok(Array.isArray(response.body.data));
    }
);

test(
    "GET /api/v1/inventory-transactions/:id returns an inventory transaction by ID",
    async () => {
        const transaction = await InventoryTransaction.findOne();

        assert.ok(
            transaction,
            "No inventory transaction found in the database"
        );

        const response = await request(app)
            .get(
                `/api/v1/inventory-transactions/${transaction._id}`
            )
            .set("Authorization", `Bearer ${token}`);

        assert.strictEqual(response.statusCode, 200);
        assert.strictEqual(response.body.success, true);
        assert.ok(response.body.data);
        assert.strictEqual(
            response.body.data._id,
            transaction._id.toString()
        );
    }
);