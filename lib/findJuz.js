'use strict';

/**
 *
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
function findJuz(suraNumber) {
  var ayaNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var l = 1;

  while (Juz[l + 1][0] < suraNumber || Juz[l + 1][0] == suraNumber && Juz[l + 1][1] <= ayaNumber) {
    l++;
  }

  return l;
}

module.exports = findJuz;
