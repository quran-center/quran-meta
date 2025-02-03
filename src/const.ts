export const meta = {
  numAyahs: 6236,
  numSurahs: 114,
  numPages: 604,
  numJuzs: 30,
  numHizbs: 60,
  numRubAlHizbs: 240,
  numRubsInJuz: 8,
  numSajdas: 15,
  numRukus: 556,
  numManzils: 7
} as const

export const maxAyahsInSurah = 286

export const maxAyahsBetweenJuzSurah = 200

export type QuranMeta = typeof meta
