type QuranMeta = {
  numAyas: number
  numSuras: number
  numPages: number
  numJuzs: number
  manzilCount: number
}

export const meta: Readonly<QuranMeta> = Object.freeze({
  numAyas: 6236,
  numSuras: 114,
  numPages: 604,
  numJuzs: 30,
  manzilCount: 7
})
