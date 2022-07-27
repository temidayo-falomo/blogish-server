import express from "express";
import { addBlog, getAllBlogs, getById } from "../controllers/blog-controller";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/add-blog", addBlog);
router.get("/:id", getById);

export default router;
