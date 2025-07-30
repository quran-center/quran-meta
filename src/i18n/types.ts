import type { SurahListType } from "../lists/surahList"
import type { ArrayOfSameLength } from "../ts-utils"
import type { SurahName } from "../types"

export type SurahNames = ArrayOfSameLength<SurahListType, SurahName | []>

export const languages = ["en", "az", "ru", "tr"] as const
export type Lang = typeof languages[number]

export type SurahNamesI18n = {
  [K in Lang]: SurahNames
}
