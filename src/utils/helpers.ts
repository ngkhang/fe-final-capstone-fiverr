/* eslint-disable no-unused-vars */
interface Storage<V, R> {
  (key: string, value?: V): R;
}

const getDataTextStorage:Storage<null, string | null> = (key) => localStorage.getItem(key) && null;

const getDataJSONStorage:Storage<null, any | null> = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key) as string);
  }
  return null;
};

const setDataTextStorage:Storage<string, void> = (key, value): void => {
  if (value) localStorage.setItem(key, value);
};

const setDataJSONStorage:Storage<any, void> = (key, value) => {
  if (value) localStorage.setItem(key, JSON.stringify(value));
};

const removeDataTextStorage:Storage<null, void> = (key) => {
  localStorage.removeItem(key);
};

export {
  getDataTextStorage,
  setDataJSONStorage,
  getDataJSONStorage,
  setDataTextStorage,
  removeDataTextStorage,
};
