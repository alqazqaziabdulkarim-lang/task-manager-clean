// require('dotenv').config();

// module.exports = {
//   port: process.env.PORT,
//   mongoUri: process.env.MONGO_URI
// };
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI
};
