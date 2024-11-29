const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;

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
        const result = [];

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

        result.push(`Number of students: ${numberOfStudents}`);
        Object.keys(fieldsCount).forEach((field) => {
          result.push(`Number of students in ${field}: ${fieldsCount[field]}. List: ${
            students.filter((student) => student.field === field).map(
              (student) => student.firstName,
            ).join(', ')
          }`);
        });
        resolve(result.join('\n'));
      }
    });
  });
}

const path = process.argv.length > 2 ? process.argv[2] : '';
let data = '';

countStudents(path)
  .then((d) => { data = d; })
  .catch((err) => { data = err instanceof Error ? err.message : err.toString(); });

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.send(`This is the list of our students\n${data}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
