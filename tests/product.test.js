import test, { after } from "node:test";
import assert from "node:assert";
import request from "supertest";
import mongoose from "mongoose";

import { app } from "../app.js";
import { connectDB } from "../config/db.js";
import { Product } from "../models/product.js";

await connectDB();

after(async () => {
    await mongoose.connection.close();
});

test("GET /api/v1/products returns all products", async () => {
    const response = await request(app)
        .get("/api/v1/products");

    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(response.body.success, true);
    assert.ok(Array.isArray(response.body.data));
});

test("GET /api/v1/products/:id returns a product by ID", async () => {
    const product = await Product.findOne();

    assert.ok(product, "No product found in the database");

    const response = await request(app)
        .get(`/api/v1/products/${product._id}`);

    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(response.body.success, true);
    assert.ok(response.body.data);
    assert.strictEqual(response.body.data._id, product._id.toString());
});