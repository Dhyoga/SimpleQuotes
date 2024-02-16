import { Router } from "express"
import quotesRouter from "./quotes.router.js"

function routerApi(app) {
  const router = Router()
  app.use("/", router)
  router.use("/quotes", quotesRouter)
}

export default routerApi
