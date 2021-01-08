require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  MOB_URL: process.env.MOB_URL,
  SECRET_JWT_KEY: process.env.SECRET_JWT_KEY
};
