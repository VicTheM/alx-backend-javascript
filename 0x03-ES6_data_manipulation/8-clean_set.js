export default function cleanSet(sett, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  return [...sett].filter((str) => str && str.startsWith(startString)).map((str) => str.slice(startString.length)).join('-');
}
