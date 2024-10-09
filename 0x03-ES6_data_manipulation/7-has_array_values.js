export default function hasValuesFromArray(sett, arr) {
  return arr.every((arr) => sett.has(arr));
}
