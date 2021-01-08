require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  SECRET_JWT_KEY: process.env.SECRET_JWT_KEY,
  DATA_BASE_NAME: process.env.DATA_BASE_NAME,
  DATA_BASE_PASSWORD: process.env.DATA_BASE_PASSWORD,
  DATA_BASE_USERNAME: process.env.DATA_BASE_USERNAME
};
