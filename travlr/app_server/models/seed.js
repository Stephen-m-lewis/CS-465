// Load the sample trips into MongoDB.
const mongoose = require('mongoose');
const Trip = require('./travlr');
const trips = require('../data/trips.json');
const host = process.env.DB_HOST || '127.0.0.1';
const uri = process.env.MONGODB_URI || `mongodb://${host}:27017/travlr`;

async function seed() {
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    // Clear old sample trips so running this twice does not make duplicates.
    await Trip.deleteMany({});
    const saved = await Trip.insertMany(trips);
    console.log(`Added ${saved.length} trips to MongoDB.`);
  } catch (err) {
    console.error('Could not seed trips:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}
seed();
