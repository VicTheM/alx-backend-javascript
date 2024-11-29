const fs = require('fs');

/**
 * Read the database file.
 * @param {String} path The path to the database file
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      }
      if (data) {
        const students = [];

        data.trim().split('\n').forEach((line, index) => {
          const fields = line.trim().split(',');
          if (fields.length > 1 && index > 0) {
            const student = {
              firstName: fields[0].trim(),
              lastName: fields[1].trim(),
              age: parseInt(fields[2].trim(), 10),
              field: fields[3].trim(),
            };
            students.push(student);
          }
        });

        const numberOfStudents = students.length;
        const fieldsCount = {};

        students.forEach((student) => {
          if (student.field in fieldsCount) {
            fieldsCount[student.field] += 1;
          } else {
            fieldsCount[student.field] = 1;
          }
        });

        console.log(`Number of students: ${numberOfStudents}`);
        Object.keys(fieldsCount).forEach((field) => {
          console.log(`Number of students in ${field}: ${fieldsCount[field]}. List: ${
            students.filter((student) => student.field === field).map(
              (student) => student.firstName,
            ).join(', ')
          }`);
        });
        resolve(true);
      }
    });
  });
}

module.exports = countStudents;
