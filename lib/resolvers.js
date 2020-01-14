const mongoLib = require('./mongo');
const mongoDb = new mongoLib();

module.exports = {
  Query: {
    Courses: async () => {
      const courses = await mongoDb.getAll('courses');
      return courses || [];
    },
    saludo: () => "Nuevo Saludo",
    Course: async (root, {id}) => {
      const course = await mongoDb.get('courses', id);
      return course;
    },
    Students: async () => {
      const students = await mongoDb.getAll('student');
      return students;
    },
    Student: async (root, { id }) => {
      const student = await mongoDb.get('student', id);
      return student;
    }
  },
  Mutation: {
    createCourse: async (root, { input }) => {
      let course = input;
      const Id = await mongoDb.create('courses', input);
      course._id = Id;
      return course;
    },
    createStudent: async (root, { input }) => {
      let student = input;
      const Id = await mongoDb.create('student', input);
      student._id = Id;
      return student;
    },
    editCourse: async (root, { _id, input }) => {
      const Id = await mongoDb.updated('courses', _id, input);
      const course = await mongoDb.get('courses', Id);
      return course;
    },
    editStudent: async (root, { _id, input }) => {
      const Id = await mongoDb.updated('student', _id, input);
      const student = await mongoDb.get('student', Id);
      return student;
    },
    deleteCourse: async (root, { _id }) => {
      const id = await mongoDb.delete('courses', _id);
      return `Curso con Id: ${id} eliminado`;
    },
    deleteStudent: async (root, { _id }) => {
      const id = await mongoDb.delete('courses', _id);
      return `Curso con Id: ${id} eliminado`;
    }
  }
};

// mongodb+srv://jasan-admin:ygn9IV2zuv3MxH8E@cluster0-nnl4g.mongodb.net/