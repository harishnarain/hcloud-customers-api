const { ObjectID } = require("mongodb");
const connectMongoDb = require("../shared/connectMongoDb");

module.exports = async function (context, req) {
  const log = context.log;
  const { id } = req.params;

  if (!id) {
    context.log("[Error]: Invalid or missing customer ID!");

    context.res = {
      status: 400,
      body: {
        message: "[Error]: Invalid or missing customer ID!",
      },
    };
    return;
  }

  try {
    const db = await connectMongoDb();

    const Customer = await db.collection("customers").findOne({
      _id: ObjectID(id),
    });

    context.res = {
      status: 200,
      body: Customer,
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: "An error occured retrieving customer record.",
    };
  }
};
