import test, { after } from "node:test";
import assert from "node:assert";
import request from "supertest";
import mongoose from "mongoose";

import { app } from "../app.js";
import { connectDB } from "../config/db.js";
import { Category } from "../models/category.js";

await connectDB();

after(async () => {
    await mongoose.connection.close();
});

test("GET /api/v1/categories returns all categories", async () => {
    const response = await request(app)
        .get("/api/v1/categories");

    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(response.body.success, true);
    assert.ok(Array.isArray(response.body.data));
});

test("GET /api/v1/categories/:id returns a category by ID", async () => {
    const category = await Category.findOne();

    assert.ok(category, "No category found in the database");

    const response = await request(app)
        .get(`/api/v1/categories/${category._id}`);

    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(response.body.success, true);
    assert.ok(response.body.data);
    assert.strictEqual(
        response.body.data._id,
        category._id.toString()
    );
});