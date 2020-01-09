const courses = [
  {
    _id: "560301",
    title: "Teacher",
    teacher: "Jasan",
    description: "una descripción",
    topic: "Mongo",
  },
  {
    _id: "650302",
    title: "Teacher",
    teacher: "Santiago",
    description: "una descripción",
    topic: "GraphQL",
  }
]

module.exports = {
  Courses: () => courses,
  saludo: () => "Nuevo Saludo"
};