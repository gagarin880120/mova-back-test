require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  SECRET_JWT_KEY: process.env.SECRET_JWT_KEY,
  MOB_URL: process.env.MOB_URL
};
