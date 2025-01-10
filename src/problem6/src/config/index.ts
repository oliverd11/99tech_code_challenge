import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  uri: process.env.MONGO_URI,
  dbName: process.env.DB_NAME,
};

export default config;
