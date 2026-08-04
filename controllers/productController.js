import { Product } from "../models/product.js";

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({
            isActive: true
        })
        return res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({
            _id: req.params.id,
            isActive: true
        });
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                message: "Invalid product ID"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const createProduct = async (req, res) => {
    try {
        const productData = req.body;
        const product = new Product(productData);
        const savedProduct = await product.save();

        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: savedProduct
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

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
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

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        
        return res.status(200).json({
            success: true,
            message: "Product updated successfully.",
            data: updatedProduct
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
                message: "Invalid product ID"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
       const deletedProduct = await Product.findOneAndUpdate(
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

       if(!deletedProduct) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
       }

       return res.status(200).json({
        success: true,
        message: "Product deleted successfully"
       });

    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                message: "Invalid product ID"
            });
        }
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};



export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};