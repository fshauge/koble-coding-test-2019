const storage = {};

export const get = key => storage[key];

export const set = (key, value) => {
  storage[key] = value;
};
