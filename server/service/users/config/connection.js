const { MongoClient } = require('mongodb');

const url =
  "mongodb+srv://Fitara:Fitrafit11@cluster0.baafezg.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

let dbName = 'tanamera_db';

async function connectDb() {
  try {
    await client.connect();
    dbName = client.db(dbName);

    console.log('Connected successfully to server');
    return dbName;
  } catch (error) {
    client.close();
    console.log(error);
  }
}

function getDB() {
  return dbName;
}

module.exports = { connectDb, getDB };
