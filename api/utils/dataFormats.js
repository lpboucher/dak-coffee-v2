'use strict';

// takes result of model query and combines multiple arrays into single array of ids
const combineArray = (collection, key) => {
  const collectionObject = collection.toObject();
  let combinedArray = [];

  Object.keys(collectionObject).map(property => {
    if (Array.isArray(collectionObject[property])) {
      combinedArray = [...new Set([...combinedArray, ...collectionObject[property].map(p => p.id)])];
      delete collectionObject[property];
    }
  });
  collectionObject[key] = combinedArray;

  return collectionObject;
};

const combineFullArray = (collection, key) => {
  const collectionObject = collection.toObject();

  let combinedArray = [];

  Object.keys(collectionObject).map(property => {
    if (Array.isArray(collectionObject[property])) {
      combinedArray = [...new Set([...combinedArray, ...collectionObject[property]])];
      delete collectionObject[property];
    }
  });
  collectionObject[key] = combinedArray;

  return collectionObject;
};

const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    if (!result[currentValue[key]]) {
      result[currentValue[key]] = [];
    }
    result[currentValue[key]].push(currentValue);
    return result;
  }, {});
}

module.exports = {
  combineArray,
  combineFullArray,
  groupBy
};
