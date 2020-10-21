'use strict';

/**
 *  Turns String of type "x:y" or "x:y1-y2" to array [x,y] or [x,[y1,y2]] respectively
 * @param {*} str String of type "x:y" or "x:y1-y2"
 * @returns {array} array [x,y] or [x,[y1,y2]] respectively
 */
function ayaStringSplitter(str) {
    var _a = str.trim().split(":"), surah = _a[0], ayahs = _a[1];
    if (!ayahs) {
        throw "Error in data " + str;
    }
    return [
        +surah,
        ayahs.includes("-")
            ? ayahs.split("-").map(Number)
            : +ayahs,
    ];
}

module.exports = ayaStringSplitter;
