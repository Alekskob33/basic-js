const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';

  try {
    if (isNaN(Date.parse(date)) || Object.keys(date).length > 0) {
      throw new Error('Invalid date!');
    }

    const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
    const month = date.getMonth();
    return seasons[month];
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}

module.exports = {
  getSeason
};
