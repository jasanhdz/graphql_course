const mongoLib = require('./mongo');
const mongoDb = new mongoLib();

module.exports = {
  createCourse: async (root, { input }) => {
    let course = input;
    const Id = await mongoDb.create('courses', input);
    course._id = Id;
    return course;
  },
  createStudent: async (root, { input }) => {
    let student = input;
    const Id = await mongoDb.create('students', input);
    student._id = Id;
    return student;
  },
  editCourse: async (root, { _id, input }) => {
    const Id = await mongoDb.updated('courses', _id, input);
    const course = await mongoDb.get('courses', Id);
    return course;
  },
  editStudent: async (root, { _id, input }) => {
    const Id = await mongoDb.updated('students', _id, input);
    const student = await mongoDb.get('students', Id);
    return student;
  },
  deleteCourse: async (root, { _id }) => {
    const id = await mongoDb.delete('courses', _id);
    return `Curso con Id: ${id} eliminado`;
  },
  deleteStudent: async (root, { _id }) => {
    const id = await mongoDb.delete('courses', _id);
    return `Curso con Id: ${id} eliminado`;
  },
  addPeople: async (root, { courseID, personID }) => {
    const course = await mongoDb.get('courses', courseID);
    const person = await mongoDb.get('students', personID);
    if (!course || !person) { throw new Error('La persona o el Curso no existe'); }

    await mongoDb.updatedArray('courses', courseID, personID);
    return course;
  }
}