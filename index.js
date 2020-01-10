"use strict";
const express = require("express");
const middlewareGQL = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
const { join } = require("path");
const { readFileSync } = require("fs");
const resolvers = require('./lib/resolvers.js');

const app = express();
const port = process.env.port || 3001;
// definimos el schema inicial
const typeDefs = readFileSync(join(__dirname, "lib", "schema.graphql"),
  'utf-8'
);

const schema = makeExecutableSchema({typeDefs, resolvers});

app.use(
  "/api",
  middlewareGQL({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
);

app.listen(port, () =>
  console.log(`Corriendo el servidor en: http://localhost:${port}/api`)
);
