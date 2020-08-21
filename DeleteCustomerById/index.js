const { ObjectID } = require("mongodb");
const connectMongoDb = require("../shared/connectMongoDb");

module.exports = async function (context, req) {
  const log = context.log;
  const { id } = req.params;

  if (!id) {
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
    const updatedCustomer = await db
      .collection("customers")
      .findOneAndDelete({ _id: ObjectID(id) });

    context.res = {
      status: 200,
      body: {
        message: "Customer record deleted successfully.",
      },
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: {
        message: "An error occured deleting customer record: " + id,
      },
    };
  }
};
