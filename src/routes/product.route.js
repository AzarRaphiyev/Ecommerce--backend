import express from "express";
import {
  getAllProducts,
  getProductsByStore,
  createProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

router.get("/", getAllProducts);
router.post("/create", createProduct);
router.get("/store/:storeId", getProductsByStore);
// router.get("/:id/details", getProductsDetails);
// router.put("/:id/edit", editProduct);
// router.delete("/:id/delete", deleteProduct);

export default router;
