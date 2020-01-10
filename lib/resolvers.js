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
      const course = await mongoDb.getCourse('courses', id);
      return course;
    } 
  }
};

// mongodb+srv://jasan-admin:ygn9IV2zuv3MxH8E@cluster0-nnl4g.mongodb.net/