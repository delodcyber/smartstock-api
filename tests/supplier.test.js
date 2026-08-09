import test, { after } from "node:test";
import assert from "node:assert";
import request from "supertest";
import mongoose from "mongoose";

import { app } from "../app.js";
import { connectDB } from "../config/db.js";
import { Supplier } from "../models/supplier.js";

await connectDB();

after(async () => {
    await mongoose.connection.close();
});

test("GET /api/v1/suppliers returns all suppliers", async () => {
    const response = await request(app)
        .get("/api/v1/suppliers");

    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(response.body.success, true);
    assert.ok(Array.isArray(response.body.data));
});

test("GET /api/v1/suppliers/:id returns a supplier by ID", async () => {
    const supplier = await Supplier.findOne();

    assert.ok(supplier, "No supplier found in the database");

    const response = await request(app)
        .get(`/api/v1/suppliers/${supplier._id}`);

    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(response.body.success, true);
    assert.ok(response.body.data);
    assert.strictEqual(
        response.body.data._id,
        supplier._id.toString()
    );
});