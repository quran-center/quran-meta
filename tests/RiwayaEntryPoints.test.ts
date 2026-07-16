import { describe, expect, test } from "vitest"
import * as bazzi from "../src/bazzi"
import * as douri from "../src/douri"
import * as qunbul from "../src/qunbul"
import * as shuba from "../src/shuba"
import * as sousi from "../src/sousi"
import { createBazzi, createDouri, createQunbul, createShuba, createSousi } from "../src"

const entries = [
  ["Bazzi", bazzi.meta, bazzi.findSurahByAyahId, createBazzi, 6221],
  ["Douri", douri.meta, douri.findSurahByAyahId, createDouri, 6217],
  ["Qunbul", qunbul.meta, qunbul.findSurahByAyahId, createQunbul, 6221],
  ["Shuba", shuba.meta, shuba.findSurahByAyahId, createShuba, 6236],
  ["Sousi", sousi.meta, sousi.findSurahByAyahId, createSousi, 6217]
] as const

describe.each(entries)("%s entry point", (name, meta, findSurahByAyahId, create, numAyahs) => {
  test("exports the riwaya metadata", () => {
    expect(meta.riwayaName).toBe(name)
    expect(meta.numAyahs).toBe(numAyahs)
  })

  test("pre-bound functions use the riwaya lists", () => {
    expect(findSurahByAyahId(1)).toBe(1)
    expect(findSurahByAyahId(numAyahs)).toBe(114)
  })

  test("createX returns a working QuranRiwaya instance", () => {
    const quran = create()
    expect(quran.meta.numAyahs).toBe(numAyahs)
    const ayahMeta = quran.getAyahMeta(1)
    expect(ayahMeta.surah).toBe(1)
    expect(quran.findJuz(114, 1)).toBe(30)
  })
})
