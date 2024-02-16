import dotenv from 'dotenv'

dotenv.config()

const config = {
  port: process.env.PORT,
  dbUser: process.env.MYSQL_USER,
  dbPassword: process.env.MYSQL_PASSWORD,
  dbHost: process.env.MYSQL_HOST,
  dbName: process.env.MYSQL_DATABASE,
  dbPort: process.env.MYSQL_PORT,
}

export default config
