'use strict';

const mongoLib = require('./mongo');
const mongoDb = new mongoLib();
const { ObjectID } = require('mongodb');
const errorHandler = require('./errorHandler');

module.exports = {
  Course: {
    people: async ({ people }) => {
      try {
        let ids = people ? people.map(id => ObjectID(id)) : [];
        const peopleData = ids.length > 0 ?
          await mongoDb.getAllInIds('students', ids)
          : [];
        return peopleData;
      } catch (error) {
        errorHandler(error);
      }
    } 
  }
}