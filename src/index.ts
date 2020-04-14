// Quran Meta
import meta from "./const"
//export default QuranMeta;
//------------------ Sura Data ---------------------

// [start, ayas, order, rukus, name,  type, page ]
import SuraList from "./qdata-surah"

//------------------ Juz Data ---------------------

// [sura, aya]
const JuzList: [number,number][] = [

  [0,0],
  [1, 1],
  [2, 142],
  [2, 253],
  [3, 93],
  [4, 24],
  [4, 148],
  [5, 82],
  [6, 111],
  [7, 88],
  [8, 41],
  [9, 93],
  [11, 6],
  [12, 53],
  [15, 1],
  [17, 1],
  [18, 75],
  [21, 1],
  [23, 1],
  [25, 21],
  [27, 56],
  [29, 46],
  [33, 31],
  [36, 28],
  [39, 32],
  [41, 47],
  [46, 1],
  [51, 31],
  [58, 1],
  [67, 1],
  [78, 1],
  [115, 1],
]

//------------------ Hizb Data ---------------------
import HizbQuarterList from "./qdata-hizb"

//------------------ Manzil Data ---------------------

const ManzilList = [
  // [sura, aya]
  [],
  [1, 1],
  [5, 1],
  [10, 1],
  [17, 1],
  [26, 1],
  [37, 1],
  [50, 1],
]

//------------------ Ruku Data ---------------------
// export Ruku  from "~/js/qdata-ruku.json"
import RukuList from "./qdata-ruku"
// [sura, aya]
//------------------ Page Data ---------------------
// code to get starting pages for surahs
// let res=[];
// Page.reduce((s,c,p)=>{
// 	while (c[0]>=s)
// 		{res.push([s,c[0],s==c[0]?p:p-1]);s+=1;}
// 	return s
// },0)
import PageList from "./qdata-page"

// [sura, aya]
// export Page from "~/js/qdata-page.json"

//------------------ Sajda Data ---------------------

const SajdaList = [
  // [sura, aya, type]
  [7, 206, "recommended"],
  [13, 15, "recommended"],
  [16, 50, "recommended"],
  [17, 109, "recommended"],
  [19, 58, "recommended"],
  [22, 18, "recommended"],
  [22, 77, "recommended"],
  [25, 60, "recommended"],
  [27, 26, "recommended"],
  [32, 15, "obligatory"],
  [38, 24, "recommended"],
  [41, 38, "obligatory"],
  [53, 62, "obligatory"],
  [84, 21, "recommended"],
  [96, 19, "obligatory"],
]

//export default QuranMeta;
import ayaStringSplitter from "./ayaStringSplitter"
export {
  meta,
  SuraList,
  JuzList,
  HizbQuarterList,
  ManzilList,
  RukuList,
  PageList,
  SajdaList,
  ayaStringSplitter,
}

/**
 *
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
export function findJuz(suraNumber: number, ayaNumber: number = 1): number {
  let l = 1
  while (
    JuzList[l + 1][0] < suraNumber ||
    (JuzList[l + 1][0] == suraNumber && JuzList[l + 1][1] <= ayaNumber)
  ) {
    l++
  }
  return l
}

/**
 * Returns Positive number if aya is first ayah of juz, number is juz number
 * @param {*} ayaNumber
 * @param {*} suraNumber
 */
export function isAyahJuzFirst(suraNumber: number, ayaNumber: number): number {
  return JuzList.findIndex((x: number[]) => x[0] == suraNumber && x[1] == ayaNumber)
}

//todo explain function
/**
 * juz number
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
export function findJuzMetaBySurah(
  suraNumber: number,
  ayaNumber: number = 1
): any[] {
  const l = findJuz(suraNumber, ayaNumber)

  let r = l
  while (JuzList[r + 1][0] == suraNumber) r++
  // console.log(l,r,
  //   "sura at start of file ",Juz[l][0],
  //   Sura[Juz[l][0]][0],
  //   Sura[suraNumber][0],
  //   Juz[l][1]
  // )
  const al = SuraList[suraNumber][0] - SuraList[JuzList[l][0]][0] - JuzList[l][1]
  // console.log(Sura[suraNumber + 1][0], Sura[Juz[l][0]][0])
  return [l, al + 1, r, getAyaCountinSura(suraNumber)]
}

/**
 *
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
export function findPage(suraNumber: number, ayaNumber: number): number {
  return (
    PageList.findIndex(
      x =>
        (x[0] == suraNumber && x[1] > ayaNumber && x[1] > 1) ||
        x[0] > suraNumber
    ) - 1
  )
}

/**
 *
 * @param {*} ayaId
 */
export function findSurahByAyaid(ayaId: number): [number,number] {
  const suraNum = SuraList.slice(1).findIndex(x => x[0] >= ayaId)
  return suraNum < 0
    ? [114, ayaId - SuraList[114][0]]
    : [suraNum, ayaId - SuraList[suraNum][0]]
}

/**
 *
 * @param {*} ayaId
 */
export function findJuzByAyaid(ayaId: number): number {
  const [s, a] = findSurahByAyaid(ayaId)
  return findJuz(s, a)
}

/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export function findAyaidBySurah(surah: number, ayah: number): number {
  const curSurahMeta = SuraList[surah]
  return curSurahMeta[0] + ayah
}

/**
 *
 * @param {*} surah
 */
export function getAyaCountinSura(surah: number): number {
  return SuraList[surah][1]
}

/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export function nextAyah(surah: number, ayah: number): number[] {
  const ayaid = findAyaidBySurah(surah, ayah)
  return findSurahByAyaid(ayaid == meta.numAyas ? 1 : ayaid + 1)
}

/**
 *
 * @param {*} surah
 * @param {*} ayah
 */
export function prevAyah(surah: number, ayah: number): number[] {
  const ayaid = findAyaidBySurah(surah, ayah)
  return findSurahByAyaid(ayaid == 1 ? meta.numAyas : ayaid - 1)
}

/**
 * Get the meta, first and last ayahs of the page
 * @param {*} pageNum
 */
export function pageMeta(pageNum: number): any {
  const [curPage, nextPage] = [PageList[pageNum], PageList[pageNum + 1]]

  return {
    pageNum,
    first: curPage,
    last: [...findSurahByAyaid(findAyaidBySurah(...nextPage) - 1)],
  }
}

/**
 * ALternative deprecated method
 * @param {*} pageNum
 */
export function pageMetaOld(pageNum: number): any {
  const [curPage, nextPage] = [PageList[pageNum], PageList[pageNum + 1]]
  const [firstSurah, firstAyah, lastSurah, lastAyah] = [
    curPage[0],
    curPage[1],
    nextPage[1] === 1 ? nextPage[0] - 1 : nextPage[0],
    nextPage[1] === 1 ? SuraList[nextPage[0] - 1][1] : nextPage[1] - 1,
  ]

  return {
    pageNum,
    first: [firstSurah, firstAyah],
    last: [lastSurah, lastAyah],
  }
}
/**
 * Find range containing ayah according to the mode
 * @param {*} ayahId
 * @param {*} mode can be either 'all', 'juz', 'surah', 'ayah', 'page'
 * default is all
 */
export function findRangeAroundAyah(surah: number, ayah: number, mode: string) {
  switch (mode) {
    case "juz": {
      const juz = findJuz(surah, ayah)
      return [
        findAyaidBySurah(...JuzList[juz]),
        findAyaidBySurah(...JuzList[juz + 1]) - 1,
      ]
    }

    case "surah": {
      return [findAyaidBySurah(surah, 1), findAyaidBySurah(surah + 1, 1) - 1]
    }

    case "ayah": {
      const ayahId = findAyaidBySurah(surah, ayah)
      return [ayahId, ayahId]
    }
    case "page": {
      const page = findPage(surah, ayah)
      return [
        findAyaidBySurah(...PageList[page]),
        findAyaidBySurah(...PageList[page + 1]) - 1,
      ]
    }

    case "all":
    default:
      return [1, meta.numAyas]
  }
}
