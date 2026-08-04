import { Supplier } from "../models/supplier.js";

const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find({
            isActive: true
        });

        return res.status(200).json({
            success: true,
            count: suppliers.length,
            data: suppliers
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const getSupplierById = async (req, res) => {
    try {
        const supplier = await Supplier.findOne({
            _id: req.params.id,
            isActive: true
        });

        if (!supplier) {
            return res.status(404).json({
                success: false,
                message: "Supplier not found."
            });
        }

        return res.status(200).json({
            success: true,
            data: supplier
        });

    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                message: "Invalid supplier ID."
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const createSupplier = async (req, res) => {
    try {
        const supplierData = req.body;
        const supplier = new Supplier(supplierData);
        const savedSupplier = await supplier.save();

        return res.status(201).json({
            success: true,
            message: "Supplier created successfully.",
            data: savedSupplier
        });

    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const updateSupplier = async (req, res) => {
    try {
        const updatedSupplier = await Supplier.findOneAndUpdate(
            {
                _id: req.params.id,
                isActive: true
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedSupplier) {
            return res.status(404).json({
                success: false,
                message: "Supplier not found."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Supplier updated successfully.",
            data: updatedSupplier
        });

    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                message: "Invalid supplier ID."
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const deleteSupplier = async (req, res) => {
    try {
        const deletedSupplier = await Supplier.findOneAndUpdate(
            {
                _id: req.params.id,
                isActive: true
            },
            {
                isActive: false
            },
            {
                new: true
            }
        );
        if (!deletedSupplier) {
            return res.status(404).json({
                success: false,
                message: "Supplier not found."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Supplier deleted successfully."
        });

    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                message: "Invalid supplier ID."
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};



export {
    getAllSuppliers,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
};