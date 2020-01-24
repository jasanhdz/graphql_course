'use strict';

const mongoLib = require('./mongo');
const mongoDb = new mongoLib();
const { ObjectID } = require('mongodb');

module.exports = {
  Course: {
    people: async ({ people }) => {
      let ids = people ? people.map(id => ObjectID(id)) : [];
      const peopleData = ids.length > 0 ?
        await mongoDb.getAllInIds('students', ids)
        : [];
      console.log(ids.length);
      return peopleData;
    } 
  }
}