const MAX_NUMBER_OF_QUERIES = 5;
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_NUMBER_OF_QUERIES) {
    throw new Error('Endpoint load is high');
  }
}
