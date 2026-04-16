import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  createProduct,
  getProducts,
  getSingleProduct,
} from "../controllers/productController.js";
import upload from "../uploads";

const router = express.Router();

router.post("/", protect, upload.single(image), createProduct);
router.get("/", getProducts);
router.get("/:id", getSingleProduct);

export default router;
