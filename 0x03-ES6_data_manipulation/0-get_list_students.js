/**
 * Returns a list of student objects.
 *
 * @returns {Array<Object>} An array of student objects, each containing the properties:
 * - `firstname` {string}: The first name of the student.
 * - `id` {number}: The unique identifier of the student.
 * - `location` {string}: The location of the student.
 */
export default function getListStudents() {
  const obj1 = { id: 1, firstname: 'Guillaume', location: 'San Francisco' };
  const obj2 = { id: 2, firstname: 'James', location: 'Columbia' };
  const obj3 = { id: 5, firstname: 'Serena', location: 'San Francisco' };

  return [obj1, obj2, obj3];
}
