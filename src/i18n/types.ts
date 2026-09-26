import type { SurahListType, SurahName } from "../types"
import type { ArrayOfSameLength } from "../ts-utils"

export type SurahNames = ArrayOfSameLength<SurahListType, SurahName | []>

export const languages = [
  "en",
  "ar",
  "az",
  "ru",
  "tr",
  "uz",
  "kk",
  "fr",
  "lt",
  "tg",
  "ky",
  "bs",
  "bn",
  "es",
  "id",
  "it",
  "ml",
  "ms",
  "nl",
  "sv",
  "ur",
  "zh"
] as const
export type Lang = (typeof languages)[number]

export type SurahNamesI18n = Record<Lang, SurahNames>
