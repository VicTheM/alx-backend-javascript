export const weakMap = new WeakMap();
export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const calls = weakMap.get(endpoint);
    if (calls >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, calls + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
};
