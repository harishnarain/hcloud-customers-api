const connectMongoDb = require('../shared/connectMongoDb');

module.exports = async function (context, req) {
    const log = context.log;

    try {
        const db = await connectMongoDb();

        let customers = await db
            .collection('customers')
            .find()
            .toArray()
        context.res = {
            status: 200,
            body: customers
        };
    } catch (error) {
        context.log(`Error code: ${error.code} message: ${error.message}`);
        context.res = {
            status: 500,
            body: {
                message: 'An error occured retrieving customer records.'
            }
        };
    }
};