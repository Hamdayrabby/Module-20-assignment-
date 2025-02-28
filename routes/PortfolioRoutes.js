import express from "express";
import { createPortfolio, getAllPortfolios, deletePortfolio, updatePortfolio } from "../controller/PortfolioController.js";
import authMiddleware from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createPortfolio);  // Only logged-in users can create
router.get("/", getAllPortfolios);  // Public: Anyone can view
router.delete("/:id", authMiddleware, deletePortfolio);  // Only logged-in users can delete
router.put("/:id", authMiddleware, updatePortfolio);  // Only logged-in users can update

export default router;
