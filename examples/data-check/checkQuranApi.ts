/**
 * https://github.com/fawazahmed0/quran-api
 * 
 * data url: https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/info.json
 */


import { findPagebyAyahId, findAyahIdBySurah, findJuz, findRubAlHizb, getAyahMeta, getRubAlHizbMetaByAyahId, HizbQuarterList, Juz, JuzList, ManzilList, meta, PageList, RukuList, SajdaList, Surah, SurahList, SurahMeta, getJuzMeta, getRubAlHizbMeta, getRukuMeta, getPageMeta, getManzilMeta, getSurahMeta } from "../../src"
import { AyahNo, AyahId, Manzil, Page, Ruku, RubAlHizbId } from "../../src/types"

import quranApi from "./data/quran-api.json"

export function checkQuranApi() {
    console.log("Checking against Quran-Api data")

    for (let ayah: AyahId = 1; ayah <= meta.numAyahs; ayah++) {
        const ayahMeta = getAyahMeta(ayah)
        const pageNo = findPagebyAyahId(ayah)
        const { verse, line, juz, manzil, page, ruku, maqra, sajda } = quranApi.chapters[ayahMeta.surah - 1].verses[ayahMeta.ayah - 1]

        if (line !== ayah) console.log("error ayahid: ", ayahMeta, line)
        if (verse !== ayahMeta.ayah) console.log("error ayahno: ", ayahMeta, verse)
        if (maqra !== ayahMeta.rubAlHizbId) console.warn("error ayah maqra: ", ayahMeta, maqra)
        if (ayahMeta.juz !== juz) console.warn("error ayah juz: ", ayahMeta, juz)
        if (ayahMeta.ruku !== ruku) console.warn("error ayah ruku: ", ayahMeta, ruku)
        if (ayahMeta.juz !== juz) console.warn("error ayah juz: ", ayahMeta, juz)
        if (ayahMeta.isSajdahAyah !== !!sajda) console.warn("error ayah isSajada : ", ayahMeta, sajda)
        if (pageNo !== page) console.warn("error page: ", ayahMeta, pageNo, page)
    }

    for (let surahNo: Surah = 1; surahNo <= meta.numSurahs; surahNo++) {
        const [
            startAyahId,
            ayahCount,
            surahOrder,
            rukuCount,
            name,
            isMeccan,
            page
        ]: SurahMeta = getSurahMeta(surahNo as Surah)
        const { chapter, name: oName, englishname, arabicname, revelation, verses } = quranApi.chapters[surahNo - 1]

        if (surahNo !== chapter) console.warn("error QuranApi surah: ", surahNo, chapter)
        if (startAyahId !== verses[0].line) console.warn("error QuranApi surah: ", startAyahId, verses[0].line)
        if (ayahCount !== verses.length) console.warn("error QuranApi surah: ", ayahCount, verses.length)
    }

    for (let juzNo: Juz = 1; juzNo <= meta.numJuzs; juzNo++) {
        const ayahId = JuzList[juzNo]
        const { juz, start, end } = quranApi.juzs.references[juzNo - 1] as { juz: Juz, start: { chapter: Surah, verse: AyahNo }, end: { chapter: Surah, verse: AyahNo } }

        if (juzNo !== juz) console.warn("error QuranApi juz: ", juzNo, juz)
        if (juzNo !== findJuz(start.chapter, start.verse)) console.warn("error QuranApi juz: ", ayahId, start)
        if (ayahId !== findAyahIdBySurah(start.chapter, start.verse)) console.warn("error QuranApi juz: ", ayahId, start)


        const { juzNum,
            firstAyahId,
            lastAyahId,
            first,
            last
        } = getJuzMeta(juzNo)
        if (juzNum !== juz) console.warn("error QuranApi juz: ", juzNo, juz)
        if (start.chapter !== first[0] || start.verse !== first[1]) console.warn("error QuranApi juz start.chapter: ", juzNo, juz)
        if (end.chapter !== last[0] || end.verse !== last[1]) console.warn("error QuranApi juz start.chapter: ", juzNo, juz)
    }


    for (let rubHizb: RubAlHizbId = 1; rubHizb <= meta.numRubAlHizbs; rubHizb++) {
        const ayahId = HizbQuarterList[rubHizb]
        const { maqra, start, end } = quranApi.maqras.references[rubHizb - 1]

        if (maqra !== rubHizb) console.warn("error QuranApi rubAlHizb: ", maqra, rubHizb)
        if (rubHizb !== findRubAlHizb(start.chapter as Surah, start.verse as AyahNo)) console.warn("error QuranApi rubAlHizb: ", ayahId, start)
        if (ayahId !== findAyahIdBySurah(start.chapter as Surah, start.verse as AyahNo)) console.warn("error QuranApi rubAlHizb: ", ayahId, start)


        const { firstAyahId,
            lastAyahId,
            first,
            last,
            juz,
            juzPart,
            hizbId,
            rubAlHizbId, }
            = getRubAlHizbMeta(rubHizb)

        if (rubAlHizbId !== maqra) console.warn("error QuranApi juz: ", rubAlHizbId, maqra)
        if (start.chapter !== first[0] || start.verse !== first[1]) console.warn("error QuranApi juz start.chapter: ", rubAlHizbId, maqra)
        if (end.chapter !== last[0] || end.verse !== last[1]) console.warn("error QuranApi juz start.chapter: ", rubAlHizbId, maqra)
    }

    for (let manzilNo = 1; manzilNo <= meta.numManzils; manzilNo++) {
        const ayahId = ManzilList[manzilNo]
        const { manzil, start, end } = quranApi.manzils.references[manzilNo - 1] as { manzil: Manzil, start: { chapter: Surah, verse: AyahNo }, end: { chapter: Surah, verse: AyahNo } }

        if (manzil !== manzilNo) console.warn("error QuranApi manzil: ", manzilNo, manzil)
        if (ayahId !== findAyahIdBySurah(start.chapter, start.verse)) console.warn("error QuranApi manzil: ", ayahId, start)

        const { firstAyahId,
            lastAyahId,
            first,
            last, manzilNum
        } = getManzilMeta(manzilNo)

        if (manzilNum !== manzilNo) console.warn("error QuranApi manzil: ", manzilNum, manzilNo)
        if (start.chapter !== first[0] || start.verse !== first[1]) console.warn("error QuranApi manzil start.chapter: ", manzilNum, manzilNo)
        if (end.chapter !== last[0] || end.verse !== last[1]) console.warn("error QuranApi manzil start.chapter: ", manzilNum, manzilNo)
    }

    for (let rukuNo: Ruku = 1; rukuNo <= meta.numRukus; rukuNo++) {
        const ayahId = RukuList[rukuNo]
        const { ruku, start, end } = quranApi.rukus.references[rukuNo - 1] as { ruku: Ruku, start: { chapter: Surah, verse: AyahNo }, end: { chapter: Surah, verse: AyahNo } }

        if (ruku !== rukuNo) console.warn("error QuranApi ruku: ", rukuNo, ruku)
        if (ayahId !== findAyahIdBySurah(start.chapter, start.verse)) console.warn("error QuranApi ruku ", ayahId, start)

        const { firstAyahId,
            lastAyahId,
            first,
            last, rukuNum
        } = getRukuMeta(rukuNo)

        if (rukuNum !== rukuNo) console.warn("error QuranApi Ruku: ", rukuNum, rukuNo)
        if (start.chapter !== first[0] || start.verse !== first[1]) console.warn("error QuranApi Ruku start.chapter: ", rukuNum, rukuNo)
        if (end.chapter !== last[0] || end.verse !== last[1]) console.warn("error QuranApi Ruku start.chapter: ", rukuNum, rukuNo)
    }


    for (let pageNo: Page = 1; pageNo <= meta.numPages; pageNo++) {
        const ayahId = PageList[pageNo]
        const { page, start, end } = quranApi.pages.references[pageNo - 1] as { page: Page, start: { chapter: Surah, verse: AyahNo }, end: { chapter: Surah, verse: AyahNo } }
        if (page !== pageNo) console.warn("error QuranApi page: ", pageNo, page)
        if (ayahId !== findAyahIdBySurah(start.chapter, start.verse)) console.warn("error QuranApi page: ", ayahId, start)

        const { firstAyahId,
            lastAyahId,
            first,
            last, pageNum
        } = getPageMeta(pageNo)

        if (pageNum !== pageNo) console.warn("error QuranApi page: ", pageNum, pageNo)
        if (start.chapter !== first[0] || start.verse !== first[1]) console.warn("error QuranApi page start.chapter: ", pageNum, pageNo)
        if (end.chapter !== last[0] || end.verse !== last[1]) console.warn("error QuranApi page start.chapter: ", pageNum, pageNo)

    }

    for (let sajdaId = 0; sajdaId < meta.numSajdas; sajdaId++) {
        const [ayahId, recommended] = SajdaList[sajdaId]
        const { sajda, chapter, verse, recommended: isRecommended, obligatory: isObligatory } = quranApi.sajdas.references[sajdaId] as { sajda: number, chapter: Surah, verse: AyahNo, recommended: boolean, obligatory: boolean }

        if (ayahId !== findAyahIdBySurah(chapter, verse)) console.warn("error QuranApi sajda: ", ayahId, chapter, verse)
        if (isRecommended && "recommended" !== recommended) console.warn("error QuranApi sajda: ", isRecommended, recommended)
        if (isObligatory && "obligatory" !== recommended) console.warn("error QuranApi sajda: ", isObligatory, recommended)
    }

}