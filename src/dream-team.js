const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false; // is not Array

  result = members.filter(item => (typeof item === 'string')); // only 'String'
  result = result.map(item => item.trim()[0]); // handle whitespaces
  if (result.length < 1) return false;

  result = result.map(item => item.toUpperCase()); // to UpperCase
  result = result.sort(); // sorted
  return result.join(''); // abbreviation
}

module.exports = {
  createDreamTeam
};
