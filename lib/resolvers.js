const queries = require('./queries');
const mutations = require('./mutations');
const types = require('./types');

module.exports = {
  Query: queries,
  Mutation: mutations,
  ...types,
};

// mongodb+srv://jasan-admin:ygn9IV2zuv3MxH8E@cluster0-nnl4g.mongodb.net/