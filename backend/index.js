import express, { json } from "express"
import { config } from "dotenv"
import cors from "cors"
import routerApi from "./src/routes/index.js"

config()
const app = express()

const port = process.env.PORT

app.use(cors())
app.use(json())

app.get("/", (res) => {
  res.send("Quotes Backend")
})

routerApi(app)

app.listen(port, () => {
  console.log("Port ==> ", port)
})
