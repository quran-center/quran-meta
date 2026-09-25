import type { AllListsNames, PartType, RiwayaData } from "./types"
import { parts } from "./types"

import type { AyahId, SurahInfo, SurahListType } from "../types"

/**
 * Represents a block or section of the Quran with its starting ayah and length
 * startAyahId - The identifier of the first ayah in the block
 * ayahCount - The number of ayahs contained in this block
 */
export interface PartBlock {
  startAyahId: AyahId
  ayahCount: AyahId
}
type PartBlocker = (value: AyahId | SurahInfo, index: number) => PartBlock

function isSurahInfo(value: unknown): value is SurahInfo {
  return Array.isArray(value) && value.length >= 2 && typeof value[0] === "number" && typeof value[1] === "number"
}

function isAyahList(list: AyahId[] | SurahInfo[]): list is AyahId[] {
  return list.every((entry) => typeof entry === "number")
}

function isSurahList(list: AyahId[] | SurahInfo[]): list is SurahInfo[] {
  return list.every((entry) => isSurahInfo(entry))
}

function toPartFormatter(type: PartType, list: AyahId[] | SurahInfo[]): PartBlocker {
  if (type === "surah") {
    if (!isSurahList(list)) {
      throw new TypeError("Expected a surah list when formatting surah blocks")
    }

    return (value: AyahId | SurahInfo) => {
      if (!isSurahInfo(value)) {
        throw new TypeError("Expected a surah info tuple")
      }

      const [startAyahId, ayahCount] = value
      return {
        ayahCount,
        startAyahId
      }
    }
  }

  if (!isAyahList(list)) {
    throw new TypeError("Expected an ayah-id list when formatting part blocks")
  }

  return (value: AyahId | SurahInfo, index: number) => {
    if (isSurahInfo(value)) {
      throw new TypeError("Expected an ayah id value")
    }

    const ayahId = value
    const nextAyahId = list[index + 2]
    const ayahCount = nextAyahId - ayahId

    return {
      ayahCount,
      startAyahId: ayahId
    }
  }
}

/**
 * Retrieves a formatted list of Quran parts based on the specified type.
 * @param name - The type of parts to retrieve (e.g., juz, hizb, rub)
 * @param data - The Lists object for the riwaya.
 * @returns An array of formatted part blocks, excluding the first and last elements
 *
 * @category Riwaya Data
 */
export function generatePartBlocks(name: PartType, data: RiwayaData): PartBlock[] | null {
  if (!parts[name]) {
    throw new Error(`Invalid part type: ${name}`)
  }

  const listName = parts[name] as keyof RiwayaData
  const list = data[listName]

  if (!list) {
    return null
  }

  if (!Array.isArray(list)) {
    throw new TypeError(`Expected array for ${listName}`)
  }

  return list.slice(1, -1).map(toPartFormatter(name, list))
}

/**
 * Returns the raw boundary list for a kind of part, e.g. the PageList for `"page"`.
 *
 * @param name - The kind of part
 * @param lists - The Lists object for the riwaya
 * @returns The list: ayah ids of each part's first ayah, or SurahInfo tuples for `"surah"`
 * @throws Error If the part type is unknown or the riwaya has no data for it
 *
 * @category Riwaya Data
 */
export function getList(name: PartType, lists: RiwayaData): AyahId[] | SurahListType {
  if (!parts[name]) {
    throw new Error(`Invalid list name: ${name}`)
  }

  const listName = parts[name]
  const list = (lists as Partial<Record<AllListsNames, AyahId[] | SurahListType>>)[listName]
  if (list) {
    return list
  }

  throw new Error(`List ${listName} not found in ${lists.meta.riwayaName} riwaya`)
}

/**
 * Returns the parts of a kind as `{ startAyahId, ayahCount }` blocks.
 *
 * @param name - The kind of part
 * @param lists - The Lists object for the riwaya
 * @returns One block per part
 *
 * @category Riwaya Data
 */
export function getListNormalised(name: PartType, lists: RiwayaData): PartBlock[] {
  const list = getList(name, lists)
  return list.slice(1, -1).map(toPartFormatter(name, list))
}
