import { Sequelize } from "sequelize"

import config from "../config/config.js"
import setupModels from "../models/index.js"

const sequelize = new Sequelize(
  config.dbName, // name database
  config.dbUser, // user database
  config.dbPassword, // password database
  {
    host: config.dbHost,
    port: config.dbPort,
    dialect: "mysql",
  }
)

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.")
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database: ", error)
//   })

sequelize.sync()
setupModels(sequelize)

export default sequelize
