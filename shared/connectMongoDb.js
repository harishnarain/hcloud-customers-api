const { MongoClient } = require("mongodb");

// The following will create a Cosmos DB Mongo DB API connection.
// It will reuse the connection for future calls

const connectMongoDb = async () => {
  let connection = null;
  if (connection) {
    // Reuse connection
    return connection;
  } else {
    // Otherwise, create a new connection
    connection = await (await MongoClient.connect(process.env.MongoDatabase, {
      useUnifiedTopology: true,
    })).db('hcloud-db');
    return connection;
  }
};

module.exports = connectMongoDb;
