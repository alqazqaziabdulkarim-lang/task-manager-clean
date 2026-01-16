// const mongoose = require('mongoose');
// const { mongoUri } = require('./env');

// const connectMongo = async () => {
//   await mongoose.connect(mongoUri);
//   console.log('MongoDB connected');
// };

// module.exports = connectMongo;
const mongoose = require('mongoose');
const { mongoUri } = require('./env');

const connectMongo = async () => {
  try {
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined');
    }

    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectMongo;
