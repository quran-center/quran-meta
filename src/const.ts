export type QuranMeta = {
  numAyahs: number
  numSuras: number
  numPages: number
  numJuzs: number
  numHizbs: number
  numRubAlHizbs: number
  numSajdas: number
  numRukus: number
  numManzils: number
}

export const meta: Readonly<QuranMeta> = Object.freeze({
  numAyahs: 6236,
  numSuras: 114,
  numPages: 604,
  numJuzs: 30,
  numHizbs: 60,
  numRubAlHizbs: 240,
  numSajdas: 15,
  numRukus: 556,
  numManzils: 7
})
