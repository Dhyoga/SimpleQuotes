import { Router } from "express"
import Controller from "../controllers/quotes.controller.js"

const router = Router()
  .get("/search", Controller.search)
  .get("/:id", Controller.getById)
  .get("/", Controller.get)
  .post("/", Controller.create)
  .put("/:id", Controller.update)
  .delete("/:id", Controller._delete)

export default router
