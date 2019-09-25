'use strict';

const countTypesInArray = arr => {
  const hash = {};
  for (const i of arr) {
    const type = typeof i;
    hash[type] ? hash[type]++ : hash[type] = 1;
  }
  return hash;
};

module.exports = { countTypesInArray };
