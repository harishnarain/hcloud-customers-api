const { ObjectID } = require("mongodb");
const connectMongoDb = require("../shared/connectMongoDb");

module.exports = async function (context, req) {
    const log = context.log;
    const { id } = req.params;
    const customer = req.body || {}

    if (!id || !customer) {
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
        const updatedCustomer = await db.collection("customers").findOneAndUpdate(
            { _id: ObjectID(id) },
            { $set: customer },
        )

        context.res = {
            status: 200,
            body: customer,
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: "An error occured updated customer record.",
        };
    }
};