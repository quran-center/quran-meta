import { AyahNo, JuzMeta, Surah } from "./types";
/**
 * for given ayah return [starting juz, number of ayahsFrom beginning of that juz, right juz, number of ayahs in surah
 * @param {*} suraNumber
 * @param {*} ayaNumber
 * @returns [leftjuz, ayahsFromStartOfJuz, rightJuz, ayahsinSurah,leftAyahId,rightAyahId]
 */
export declare function findJuzMetaBySurah(surah: Surah, ayah?: AyahNo): JuzMeta;
