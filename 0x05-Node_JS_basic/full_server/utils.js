const fs = require('fs');

/**
 * Read the database file.
 * @param {String} path The path to the database file
 */
function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      }
      if (data) {
        const studentsByFields = {};

        data.trim().split('\n').forEach((line, index) => {
          const fields = line.trim().split(',');
          if (fields.length > 1 && index > 0) {
            const student = {
              firstName: fields[0].trim(),
              lastName: fields[1].trim(),
              age: parseInt(fields[2].trim(), 10),
              field: fields[3].trim(),
            };
            if (!(Object.keys(studentsByFields).includes(student.field))) {
              studentsByFields[student.field] = [];
            }
            studentsByFields[student.field].push(student);
          }
        });
        resolve(studentsByFields);
      }
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
