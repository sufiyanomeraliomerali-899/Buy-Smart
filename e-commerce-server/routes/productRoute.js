import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createProduct,
  getProducts,
  getSingleProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/", protect, createProduct);
router.get("/", getProducts);
router.get("/:id", getSingleProduct);

export default router;
