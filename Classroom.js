const getStudents = (classroom) => {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, teachingAssistant, students;

  if (hasTeachingAssistant) {
    [teacher, teachingAssistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

console.log(
  getStudents({
    hasTeachingAssistant: true,
    classList: ['Rashida', 'John', 'Roman', 'Lisa', 'Omair', 'Lukas']
  })
)