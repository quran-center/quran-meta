import type { PartType, RiwayaData, Riwayas } from "./types"
import { parts } from "./types"

import type { AyahId, AyahNo, SurahInfo } from "../types"

/**
 * Represents a block or section of the Quran with its starting ayah and length
 * startAyahId - The identifier of the first ayah in the block
 * ayahCount - The number of ayahs contained in this block
 */
export interface PartBlock {
  startAyahId: AyahId
  ayahCount: AyahId | AyahNo
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
 */
export function generatePartBlocks<P extends PartType>(name: P, data: RiwayaData): PartBlock[] | null {
  if (!parts[name]) {
    throw new Error(`Invalid part type: ${name}`)
  }

  const listName = parts[name] as keyof RiwayaData
  const list = data[listName]

  if (!list) {
    return null
  }

  if (!Array.isArray(list)) {
    throw new TypeError(`Expected array for ${String(listName)}`)
  }

  return list.slice(1, -1).map(toPartFormatter(name, list))
}

export const getList = <P extends PartType, M extends Riwayas, R extends keyof M, L extends keyof Omit<M[R], "meta">>(
  name: P,
  lists: RiwayaData
): M[R][L] => {
  if (!parts[name]) {
    throw new Error(`Invalid list name: ${name}`)
  }

  const listName = parts[name] as keyof Omit<RiwayaData, "meta">
  if (listName in lists) {
    return lists[listName] as M[R][L]
  }

  throw new Error(`List ${String(listName)} not found in ${lists.meta.riwayaName} riwaya`)
}

export function getListNormalised(name: PartType, lists: RiwayaData): PartBlock[] {
  const list = getList(name, lists)
  return list.slice(1, -1).map(toPartFormatter(name, list))
}
