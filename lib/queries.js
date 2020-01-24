const mongoLib = require('./mongo');
const mongoDb = new mongoLib();

module.exports = {
  Courses: async () => {
    const courses = await mongoDb.getAll('courses');
    return courses || [];
  },
  Course: async (root, {id}) => {
    const course = await mongoDb.get('courses', id);
    return course;
  },
  People: async () => {
    const students = await mongoDb.getAll('students');
    return students;
  },
  Person: async (root, { id }) => {
    const student = await mongoDb.get('students', id);
    return student;
  }
}