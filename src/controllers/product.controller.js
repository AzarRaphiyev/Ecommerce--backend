import Product from '../models/product.model.js';
import User from '../models/user.model.js';

export const createProduct = async (req, res) => {
    try {
        const { title, description, category, price, currency, stock, images, storeId } = req.body;

        const store = await User.findById(storeId);
        if (!store || store.role !== "store") {
            return res.status(400).json({ message: "Invalid store ID or user is not a store" });
        }

        const newProduct = await Product.create({
            title,
            description,
            category,
            price,
            currency,
            stock,
            images,
            storeId,
        });

        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getProductsByStore = async (req, res) => {
    try {
        const { storeId } = req.params;

        const products = await Product.find({ storeId });
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}