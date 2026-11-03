const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB berhasil terhubung');
  } catch (error) {
    console.error('Gagal terhubung ke MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;