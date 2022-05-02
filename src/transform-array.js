const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    }
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        result.push(arr[i]);
        continue;
      }

      switch (arr[i]) {
        case "--discard-next":
          if (arr[i + 1]) i += 2;
          break;
        case "--discard-prev":
          if (result[i - 1]) result.splice(i - 1, 1);
          break;
        case "--double-next":
          if (arr[i + 1]) result.push(arr[i + 1]);
          break;
        case "--double-prev":
          if (result[i - 1]) result.push(arr[i - 1]);
          break;
        default:
          result.push(arr[i]);
      }
    }
    return result;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  transform
};
