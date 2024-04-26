const isEmptyString = (str) =>
  typeof str === "string" && str.trim().length === 0;

const isNumber = (str) => {
  try {
    Number(str);
    return true;
  } catch (error) {
    return false;
  }
};

const exclude = (obj, keys) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key))
  );
};

export { isEmptyString, isNumber, exclude };
