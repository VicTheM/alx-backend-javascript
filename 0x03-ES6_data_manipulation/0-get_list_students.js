/**
 * Returns a list of student objects.
 *
 * @returns {Array<Object>} An array of student objects, each containing the properties:
 * - `firstname` {string}: The first name of the student.
 * - `id` {number}: The unique identifier of the student.
 * - `location` {string}: The location of the student.
 */
export default function getListStudents() {
  return [
    { id: 1, firstname: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstname: 'James', location: 'Columbia' },
    { id: 5, firstname: 'Serena', location: 'San Francisco' },
  ];
}
