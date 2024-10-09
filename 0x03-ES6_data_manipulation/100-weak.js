export const weakMap = new WeakMap();
export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const calls = weakMap.get(endpoint);
    weakMap.set(endpoint, calls + 1);
    if (calls >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    weakMap.set(endpoint, 1);
  }
};
