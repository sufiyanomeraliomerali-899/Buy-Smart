import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import testRoute from "./routes/testRoute.js";
import productRoute from "./routes/productRoute.js";
import path from "path";

dotenv.config();
connectDb();

const App = express();

App.use(express.json());
App.use(cors());

App.get("/", (req, res) => {
  res.send("Assalamualikum");
  console.log("Assalamualikum");
});

App.use("/api/auth", authRoutes);
App.use("/api/test", testRoute);
App.use("/api/products", productRoute);
App.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

const PORT = process.env.PORT || 5000;

App.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
