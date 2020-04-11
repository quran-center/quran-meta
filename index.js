// Quran Meta 
var QuranMeta = {
  numAyas: 6236,
  numSuras: 114,
  numPages: 604,
  numJuzs: 30,
  manzilCount: 7,
}

//------------------ Sura Data ---------------------

// [start, ayas, order, rukus, name, tname, ename, type, tnamerus, rname, page ]
import Sura from "./qdata-surah.json"
QuranMeta.Sura = Sura
//------------------ Juz Data ---------------------

// [sura, aya]
QuranMeta.Juz = [
  [],
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
import HizbQuarter from "./qdata-hizb.json"
QuranMeta.HizbQuarter = HizbQuarter

//------------------ Manzil Data ---------------------

QuranMeta.Manzil = [
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
import Ruku from "./qdata-ruku.json"
// [sura, aya]
QuranMeta.Ruku = Ruku
//------------------ Page Data ---------------------
// code to get starting pages for surahs
// let res=[];
// Page.reduce((s,c,p)=>{
// 	while (c[0]>=s)
// 		{res.push([s,c[0],s==c[0]?p:p-1]);s+=1;}
// 	return s
// },0)
import Page from "./qdata-page.json"
// [sura, aya]
QuranMeta.Page = Page
// export Page from "~/js/qdata-page.json"

//------------------ Sajda Data ---------------------

QuranMeta.Sajda = [
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

QuranMeta.Rabbana = [
  [2, 127],
  [2, 128],
  [2, 201],
  [2, 250],
  [2, 286],
  [2, 286],
  [2, 286],
  [3, 8],
  [3, 9],
  [3, 16],
  [3, 53],
  [3, 147],
  [3, 191],
  [3, 192],
  [3, 193],
  [3, 193],
  [3, 194],
  [5, 83],
  [5, 114],
  [7, 23],
  [7, 47],
  [7, 89],
  [7, 126],
  [10, 85, 86],
  [14, 38],
  [14, 40],
  [14, 41],
  [18, 10],
  [20, 45],
  [23, 109],
  [25, 65, 66],
  [25, 74],
  [35, 34],
  [40, 7],
  [40, 89],
  [59, 10],
  [59, 10],
  [60, 4],
  [60, 5],
  [66, 8],
]
export default QuranMeta

/**
 * Returns Positive number if aya is first ayah of juz, number is juz number
 * @param {*} ayaNumber
 * @param {*} suraNumber
 */
export function isAyahJuzFirst(suraNumber, ayaNumber) {
  return QuranMeta.Juz.findIndex(x => x[0] == suraNumber && x[1] == ayaNumber)
}

export function findJuz(suraNumber, ayaNumber = 1) {
  let l = 1
  while (
    QuranMeta.Juz[l + 1][0] < suraNumber ||
    (QuranMeta.Juz[l + 1][0] == suraNumber &&
      QuranMeta.Juz[l + 1][1] <= ayaNumber)
  ) {
    l++
  }
  return l
}

//todo explain function
/**
 * juz number
 * @param {*} suraNumber
 * @param {*} ayaNumber
 */
export function findJuzMetaBySurah(suraNumber, ayaNumber = 1) {
  let l = findJuz(suraNumber, ayaNumber)

  let r = l
  while (QuranMeta.Juz[r + 1][0] == suraNumber) r++
  // console.log(l,r,
  //   "sura at start of file ",QuranMeta.Juz[l][0],
  //   Sura[QuranMeta.Juz[l][0]][0],
  //   Sura[suraNumber][0],
  //   QuranMeta.Juz[l][1]
  // )
  let al =
    Sura[suraNumber][0] - Sura[QuranMeta.Juz[l][0]][0] - QuranMeta.Juz[l][1]
  // console.log(Sura[suraNumber + 1][0], Sura[QuranMeta.Juz[l][0]][0])
  return [l, al + 1, r, getAyaCountinSura(suraNumber)]
}

export function findPage(suraNumber, ayaNumber) {
  return (
    QuranMeta.Page.findIndex(
      x =>
        (x[0] == suraNumber && x[1] > ayaNumber && x[1] > 1) ||
        x[0] > suraNumber
    ) - 1
  )
}

export function findSurahByAyaid(ayaId) {
  let suraNum = Sura.slice(1).findIndex(x => x[0] >= ayaId)
  return suraNum < 0
    ? [114, ayaId - Sura[114][0]]
    : [suraNum, ayaId - Sura[suraNum][0]]
}

export function findJuzByAyaid(ayaId) {
  let [s, a] = findSurahByAyaid(ayaId)
  return findJuz(s, a)
}

export function findAyaidBySurah(surah, ayah) {
  let curSurahMeta = QuranMeta.Sura[surah]
  return curSurahMeta[0] + ayah
}

export function getAyaCountinSura(surah) {
  return QuranMeta.Sura[surah][1]
}

export function nextAyah(surah, ayah) {
  let ayaid = findAyaidBySurah(surah, ayah)
  return findSurahByAyaid(ayaid == QuranMeta.numAyas ? 1 : ayaid + 1)
}

export function prevAyah(surah, ayah) {
  let ayaid = findAyaidBySurah(surah, ayah)
  return findSurahByAyaid(ayaid == 1 ? QuranMeta.numAyas : ayaid - 1)
}

/**
 * Get the meta, first and last ayahs of the page
 * @param {*} pageNum
 */
export function pageMeta(pageNum) {
  const [curPage, nextPage] = [
    QuranMeta.Page[pageNum],
    QuranMeta.Page[pageNum + 1],
  ]

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
export function pageMetaOld(pageNum) {
  const [curPage, nextPage] = [
    QuranMeta.Page[pageNum],
    QuranMeta.Page[pageNum + 1],
  ]
  const [firstSurah, firstAyah, lastSurah, lastAyah] = [
    curPage[0],
    curPage[1],
    nextPage[1] === 1 ? nextPage[0] - 1 : nextPage[0],
    nextPage[1] === 1 ? QuranMeta.Sura[nextPage[0] - 1][1] : nextPage[1] - 1,
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
export function findRangeAroundAyah(surah, ayah, mode) {
  switch (mode) {
    case "juz": {
      let juz = findJuz(surah, ayah)
      return [
        findAyaidBySurah(...QuranMeta.Juz[juz]),
        findAyaidBySurah(...QuranMeta.Juz[juz + 1]) - 1,
      ]
    }

    case "surah": {
      return [findAyaidBySurah(surah, 1), findAyaidBySurah(surah + 1, 1) - 1]
    }

    case "ayah": {
      let ayahId = findAyaidBySurah(surah, ayah)
      return [ayahId, ayahId]
    }
    case "page": {
      let page = findPage(surah, ayah)
      return [
        findAyaidBySurah(...QuranMeta.Page[page]),
        findAyaidBySurah(...QuranMeta.Page[page + 1]) - 1,
      ]
    }

    case "all":
    default:
      return [1, QuranMeta.numAyas]
  }
}
/**
 *  Turns String of type "x:y" or "x:y1-y2" to array [x,y] or [x,[y1,y2]] respectively
 * @param {*} str
 */
export function ayaStringSplitter(str) {
  let [surah, ayahs] = str.trim().split(":")
  if (!ayahs) {
    console.warn("Error in data ", str)
  }
  ayahs = ayahs.includes("-") ? ayahs.split("-").map(Number) : +ayahs
  return [+surah, ayahs]
}
