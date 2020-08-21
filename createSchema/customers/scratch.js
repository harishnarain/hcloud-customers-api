db.runCommand( {
    collMod: "customers",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name"],
        additionalProperties: false,
        properties: {
          _id: {
            bsonType: "objectId",
          },
          name: {
            bsonType: "string",
            minimum: 1,
            maximum: 256,
            pattern: "/^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/",
            description: "'name' is required and is a string",
          },
        },
      },
    },
    validationAction: "error",
    validationLevel: "moderate",
  });