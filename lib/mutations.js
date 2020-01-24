const mongoLib = require('./mongo');
const mongoDb = new mongoLib();
const errorHandler = require('./errorHandler');

module.exports = {
  createCourse: async (root, { input }) => {
    try {
      let course = input;
      const Id = await mongoDb.create('courses', input);
      course._id = Id;
      return course;
    } catch (error) {
      errorHandler(error);
    }
  },
  createPerson: async (root, { input }) => {
    try {
      let student = input;
      const Id = await mongoDb.create('students', input);
      student._id = Id;
      return student;
    } catch (error) {
      errorHandler(error);
    }
  },
  editCourse: async (root, { _id, input }) => {
    try {
      const Id = await mongoDb.updated('courses', _id, input);
      const course = await mongoDb.get('courses', Id);
      return course;
    } catch (error) {
      errorHandler(error);
    }
  },
  editPerson: async (root, { _id, input }) => {
    try {
      const Id = await mongoDb.updated('students', _id, input);
      const student = await mongoDb.get('students', Id);
      return student;
    } catch (error) {
      errorHandler(error);
    }
  },
  deleteCourse: async (root, { _id }) => {
    try {
      const id = await mongoDb.delete('courses', _id);
      return `Curso con Id: ${id} eliminado`;
    } catch (error) {
      errorHandler(error);
    }
  },
  deleteStudent: async (root, { _id }) => {
    try {
      const id = await mongoDb.delete('courses', _id);
      return `Curso con Id: ${id} eliminado`;
    } catch (error) {
      errorHandler(error);
    }
  },
  addPeople: async (root, { courseID, personID }) => {
    try {
      const course = await mongoDb.get('courses', courseID);
      const person = await mongoDb.get('students', personID);
      if (!course || !person) { throw new Error('La persona o el Curso no existe'); }
  
      await mongoDb.updatedArray('courses', courseID, personID);
      return course;
    } catch (error) {
      errorHandler(error);
    }
  }
}