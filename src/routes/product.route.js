import express from "express";
import {
  getAllProducts,
  getProductsDetails,
  editProduct,
  deleteProduct,
  createProduct,
} from "../controller/productController.js";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id/details", getProductsDetails);
router.put("/:id/edit", editProduct);
router.delete("/:id/delete", deleteProduct);
router.post("/create", createProduct);

export default router;
