# Azure Functions API for managing customer records

Here is an API that I've put together that uses an Azure Functions HTTP Trigger to host an API that performs CRUD operations on customer records. 

Customers records would be stored in MongoDB. 

## Installation
### MongoDB setup
1. Create a MongoDB database and collection. Name the collection **customers**.
2. Create schema validation
```
{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'name',
      'adminEmail'
    ],
    properties: {
      name: {
        bsonType: 'string',
        minLength: 1,
        maxLength: 255,
        pattern: '^[a-zA-Z0-9]([a-zA-Z0-9.-_,]|[- @.#&!])*$',
        description: '\'name\' is required and must be a string'
      },
      adminEmail: {
        bsonType: 'string',
        minLength: 5,
        maxLength: 320,
        pattern: '^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
        description: '\'adminEmail\' is required and is an email address'
      },
      telephoneNumber: {
        bsonType: 'string',
        minLength: 0,
        pattern: '^$|((?:\\+|00)[17](?: |\\-)?|(?:\\+|00)[1-9]\\d{0,2}(?: |\\-)?|(?:\\+|00)1\\-\\d{3}(?: |\\-)?)?(0\\d|\\([0-9]{3}\\)|[1-9]{0,3})(?:((?: |\\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\\-)[0-9]{3}(?: |\\-)[0-9]{4})|([0-9]{7}))'
      }
    }
  }
}
```
3. Create a local.settings.json file with the following and update the MongoDatabase attribute with the appropriate MongoDB connection string. (user, password, and database name)
```JSON
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "",
    "MongoDatabase": "mongodb+srv://<user>:<password>@hcloud-atlas-cluster-01.rgl0c.mongodb.net/<database_name>?retryWrites=true&w=majority"
  }
}
```

### Deploy Azure Function
Deploy to Azure Functions. For more information please refer to: [Quickstart: Create a function in Azure using Visual Studio Code
](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-function-vs-code?pivots=programming-language-javascript)

## Usage
### Customer Fields
Documentation coming soon
### CRUD operations
Documentation coming soon

## License
Apache 2.0 License

## Contributing
Pull requests are welcome.