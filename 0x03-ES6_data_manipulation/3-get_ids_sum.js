export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }

  return arr.map((arr) => arr.id).reduce((a, b) => a + b, 0);
}
