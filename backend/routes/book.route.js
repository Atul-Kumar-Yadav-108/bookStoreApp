import e from "express";
import { getBook } from "../controllers/book.controller.js";

const router = e.Router();

router.get("/",getBook);

export default router;