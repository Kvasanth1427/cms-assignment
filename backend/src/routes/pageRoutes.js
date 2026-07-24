import express from "express";
import {
  createPage,
  getAllPages,
  getPageById,
  updatePage,
  deletePage,
} from "../controllers/pageController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createPage);

router.get("/", authMiddleware, getAllPages);

router.get("/:id", authMiddleware, getPageById);

router.put("/:id", authMiddleware, updatePage);

router.delete("/:id", authMiddleware, deletePage);

export default router;