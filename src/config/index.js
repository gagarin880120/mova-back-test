require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  MOB_URL:
    'mongodb+srv://admin:G8G2Bfs5cBepEdr@cluster-mova-data-base.bnb39.mongodb.net/mova-data-base-user?retryWrites=true&w=majority',
  SECRET_JWT_KEY: process.env.SECRET_JWT_KEY
};
