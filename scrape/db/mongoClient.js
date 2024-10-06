const { MongoClient } = require('mongodb');

let client;

const connectToMongo = async () => {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
  }
  return client.db(process.env.MONGODB_DB_NAME);
};

const closeMongoConnection = async () => {
  if (client) {
    await client.close();
    client = null;
  }
};

module.exports = { connectToMongo, closeMongoConnection };