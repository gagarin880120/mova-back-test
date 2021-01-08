const { config } = require('dotenv');

config();

const {
  PORT,
  MODE,
  DATA_BASE_NAME,
  DATA_BASE_PASSWORD,
  DATA_BASE_USERNAME,
  IN_PROD = MODE !== 'prod',
  SECRET_JWT_KEY
} = process.env;

const MONGO_DB_CONNECTION_URL = `mongodb+srv://${DATA_BASE_USERNAME}:${DATA_BASE_PASSWORD}@cluster-mova-data-base.bnb39.mongodb.net/${DATA_BASE_NAME}?retryWrites=true&w=majority`;

module.exports = {
  PORT,
  MODE,
  DATA_BASE_NAME,
  MONGO_DB_CONNECTION_URL,
  IN_PROD,
  SECRET_JWT_KEY
};
