import { InventoryTransaction } from "../models/inventoryTransaction.js";

const getAllTransactions = async (req, res) => {
    try {
        const transactions = await InventoryTransaction.find()
            .populate("product");

        res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve inventory transactions.",
            error: error.message
        });
    }
};

const getTransactionById = async (req, res) => {
    try {
        const transaction = await InventoryTransaction.findById(
            req.params.id
        ).populate("product");

        if (!transaction) {
            return res.status(404).json({
                success: false,
                message: "Inventory transaction not found."
            });
        }

        res.status(200).json({
            success: true,
            data: transaction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve inventory transaction.",
            error: error.message
        });
    }
};

const createTransaction = async (req, res) => {
    try {
        const transaction = await InventoryTransaction.create(req.body);

        const populatedTransaction =
            await InventoryTransaction.findById(transaction._id)
                .populate("product");

        res.status(201).json({
            success: true,
            message: "Inventory transaction created successfully.",
            data: populatedTransaction
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create inventory transaction.",
            error: error.message
        });
    }
};

const updateTransaction = async (req, res) => {
    try {
        const transaction =
            await InventoryTransaction.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            ).populate("product");

        if (!transaction) {
            return res.status(404).json({
                success: false,
                message: "Inventory transaction not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Inventory transaction updated successfully.",
            data: transaction
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update inventory transaction.",
            error: error.message
        });
    }
};

const deleteTransaction = async (req, res) => {
    try {
        const transaction =
            await InventoryTransaction.findByIdAndDelete(req.params.id);

        if (!transaction) {
            return res.status(404).json({
                success: false,
                message: "Inventory transaction not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Inventory transaction deleted successfully."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete inventory transaction.",
            error: error.message
        });
    }
};

export {
    getAllTransactions,
    getTransactionById,
    createTransaction,
    updateTransaction,
    deleteTransaction
};