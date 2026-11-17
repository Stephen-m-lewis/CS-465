// Connect the Travlr app to the local MongoDB database.
const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = process.env.MONGODB_URI || `mongodb://${host}:27017/travlr`;

mongoose.connection.on('connected', () => console.log('MongoDB connected'));
mongoose.connection.on('error', (err) => console.error('MongoDB connection error:', err.message));
mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected'));

async function connect() {
  try {
    await mongoose.connect(dbURI, { serverSelectionTimeoutMS: 5000 });
  } catch (err) {
    console.error('Could not connect to MongoDB:', err.message);
  }
}

async function shutdown(signal) {
  try {
    await mongoose.connection.close();
    console.log(`MongoDB closed (${signal})`);
  } catch (err) {
    console.error('Error closing MongoDB:', err.message);
  }
}
process.once('SIGINT', async () => { await shutdown('SIGINT'); process.exit(0); });
process.once('SIGTERM', async () => { await shutdown('SIGTERM'); process.exit(0); });
process.once('SIGUSR2', async () => { await shutdown('nodemon restart'); process.kill(process.pid, 'SIGUSR2'); });

require('./travlr');
connect();
module.exports = mongoose;
