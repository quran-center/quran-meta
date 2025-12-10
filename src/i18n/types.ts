import type { SurahListType, SurahName } from "../types"
import type { ArrayOfSameLength } from "../ts-utils"

export type SurahNames = ArrayOfSameLength<SurahListType, SurahName | []>

export const languages = ["en", "az", "ru", "tr", "uz", "kk", "fr", "lt", "tg", "ky", "bs"] as const
export type Lang = (typeof languages)[number]

export type SurahNamesI18n = {
  [K in Lang]: SurahNames
}
