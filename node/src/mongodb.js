import { MongoClient } from 'mongodb';

const {
  MONGO_URL
} = process.env;

// Create a new MongoClient
const client = new MongoClient(MONGO_URL);

export const checkConnection = async () => {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
  } finally {
    // Ensures that the client will close when you finish/error
    client.close();
  }
}