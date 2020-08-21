const connectMongoDb = require('../shared/connectMongoDb');

module.exports = async function (context, req) {
    const log = context.log;

    try {
        const db = await connectMongoDb();
        let customer = await db
            .collection('customers')
            .insertOne(context.req.body);
        context.res = {
            status: 201,
            body: customer.ops
        };
    } catch (error) {
        context.log(`Error code: ${error.code} message: ${error.message}`);
        context.res = {
            status: 500,
            body: {
                message: 'An error occured creating customer record.'
            }
        };
    }
};