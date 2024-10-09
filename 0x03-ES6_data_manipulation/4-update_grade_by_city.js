export default function updateStudentGradeByCity(arr, city, newGrade) {
  return arr.filter((arr) => arr.location === city).map((arr) => ({ ...arr, grade: newGrade }));
}
