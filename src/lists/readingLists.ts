/**
 * Reading-aware list loader
 * Dynamically loads page, juz, and surah lists based on the current reading
 */

import { type Reading, getCurrentReading } from "../reading"
import { AyahId, SurahInfo } from "../types"
import { FixedArray } from "../ts-utils"

// Default hafs lists (backward compatibility)
import { PageList as HafsPageList } from "./hafs/pageList"
import { JuzList as HafsJuzList } from "./hafs/juzList"
import { SurahList as HafsSurahList } from "./hafs/surahList"

// Warsh lists
import { PageList as WarshPageList } from "./warsh/pageList"
import { JuzList as WarshJuzList } from "./warsh/juzList"
import { SurahList as WarshSurahList } from "./warsh/surahList"

// Qaloun lists
import { PageList as QalounPageList } from "./qaloun/pageList"
import { JuzList as QalounJuzList } from "./qaloun/juzList"
import { SurahList as QalounSurahList } from "./qaloun/surahList"

// Douri lists
import { PageList as DouriPageList } from "./douri/pageList"
import { JuzList as DouriJuzList } from "./douri/juzList"
import { SurahList as DouriSurahList } from "./douri/surahList"

// Sousi lists
import { PageList as SousiPageList } from "./sousi/pageList"
import { JuzList as SousiJuzList } from "./sousi/juzList"
import { SurahList as SousiSurahList } from "./sousi/surahList"

// Shuba lists
import { PageList as ShubaPageList } from "./shuba/pageList"
import { JuzList as ShubaJuzList } from "./shuba/juzList"
import { SurahList as ShubaSurahList } from "./shuba/surahList"

/**
 * Gets the page list for the current reading
 */
export function getPageList(): readonly AyahId[] {
  const reading = getCurrentReading()
  switch (reading) {
    case "hafs":
      return HafsPageList
    case "warsh":
      return WarshPageList
    case "qaloun":
      return QalounPageList
    case "douri":
      return DouriPageList
    case "sousi":
      return SousiPageList
    case "shuba":
      return ShubaPageList
    default:
      return HafsPageList
  }
}

/**
 * Gets the juz list for the current reading
 */
export function getJuzList(): readonly AyahId[] {
  const reading = getCurrentReading()
  switch (reading) {
    case "hafs":
      return HafsJuzList
    case "warsh":
      return WarshJuzList
    case "qaloun":
      return QalounJuzList
    case "douri":
      return DouriJuzList
    case "sousi":
      return SousiJuzList
    case "shuba":
      return ShubaJuzList
    default:
      return HafsJuzList
  }
}

/**
 * Gets the surah list for the current reading
 */
export function getSurahList(): FixedArray<SurahInfo, 114> {
  const reading = getCurrentReading()
  switch (reading) {
    case "hafs":
      return HafsSurahList
    case "warsh":
      return WarshSurahList
    case "qaloun":
      return QalounSurahList
    case "douri":
      return DouriSurahList
    case "sousi":
      return SousiSurahList
    case "shuba":
      return ShubaSurahList
    default:
      return HafsSurahList
  }
}

/**
 * Gets a specific reading's page list (for direct access without changing current reading)
 */
export function getPageListForReading(reading: Reading): readonly AyahId[] {
  switch (reading) {
    case "hafs":
      return HafsPageList
    case "warsh":
      return WarshPageList
    case "qaloun":
      return QalounPageList
    case "douri":
      return DouriPageList
    case "sousi":
      return SousiPageList
    case "shuba":
      return ShubaPageList
  }
}

/**
 * Gets a specific reading's juz list (for direct access without changing current reading)
 */
export function getJuzListForReading(reading: Reading): readonly AyahId[] {
  switch (reading) {
    case "hafs":
      return HafsJuzList
    case "warsh":
      return WarshJuzList
    case "qaloun":
      return QalounJuzList
    case "douri":
      return DouriJuzList
    case "sousi":
      return SousiJuzList
    case "shuba":
      return ShubaJuzList
  }
}

/**
 * Gets a specific reading's surah list (for direct access without changing current reading)
 */
export function getSurahListForReading(reading: Reading): FixedArray<SurahInfo, 114> {
  switch (reading) {
    case "hafs":
      return HafsSurahList
    case "warsh":
      return WarshSurahList
    case "qaloun":
      return QalounSurahList
    case "douri":
      return DouriSurahList
    case "sousi":
      return SousiSurahList
    case "shuba":
      return ShubaSurahList
  }
}
