const readDatabase = require('../utils');

const databaseFile = process.argv.length > 2 ? process.argv[2] : '';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(databaseFile)
      .then((studentsByFields) => {
        const responseText = ['This is the list of our students'];

        Object.keys(studentsByFields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
          .forEach((field) => {
            responseText.push(`Number of students in ${field}: ${studentsByFields[field].length}. List: ${
              studentsByFields[field].map(
                (student) => student.firstName,
              ).join(', ')
            }`);
          });

        response.status(200).send(responseText.join('\n'));
      }).catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const MAJORS = ['CS', 'SWE'];
    const { major } = request.params;

    if (!MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(databaseFile)
      .then((studentsByFields) => {
        let responseText = '';

        if (Object.keys(studentsByFields).includes(major)) {
          responseText = `List: ${
            studentsByFields[major].map(
              (student) => student.firstName,
            ).join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
