/*! 
 * Quran Meta library 2.5.1
 *
 * Released under the MIT license
 */

'use strict';

var suraNames$1 = [
    [],
    ["Al-Faatiha", "The Opening"],
    ["Al-Baqara", "The Cow"],
    ["Aal-i-Imraan", "The Family of Imraan"],
    ["An-Nisaa", "The Women"],
    ["Al-Maaida", "The Table"],
    ["Al-An'aam", "The Cattle"],
    ["Al-A'raaf", "The Heights"],
    ["Al-Anfaal", "The Spoils of War"],
    ["At-Tawba", "The Repentance"],
    ["Yunus", "Jonas"],
    ["Hud", "Hud"],
    ["Yusuf", "Joseph"],
    ["Ar-Ra'd", "The Thunder"],
    ["Ibrahim", "Abraham"],
    ["Al-Hijr", "The Rock"],
    ["An-Nahl", "The Bee"],
    ["Al-Israa", "The Night Journey"],
    ["Al-Kahf", "The Cave"],
    ["Maryam", "Mary"],
    ["Taa-Haa", "Taa-Haa"],
    ["Al-Anbiyaa", "The Prophets"],
    ["Al-Hajj", "The Pilgrimage"],
    ["Al-Muminoon", "The Believers"],
    ["An-Noor", "The Light"],
    ["Al-Furqaan", "The Criterion"],
    ["Ash-Shu'araa", "The Poets"],
    ["An-Naml", "The Ant"],
    ["Al-Qasas", "The Stories"],
    ["Al-Ankaboot", "The Spider"],
    ["Ar-Room", "The Romans"],
    ["Luqman", "Luqman"],
    ["As-Sajda", "The Prostration"],
    ["Al-Ahzaab", "The Clans"],
    ["Saba", "Sheba"],
    ["Faatir", "The Originator"],
    ["Yaseen", "Yaseen"],
    ["As-Saaffaat", "Those drawn up in Ranks"],
    ["Saad", "The letter Saad"],
    ["Az-Zumar", "The Groups"],
    ["Al-Ghaafir", "The Forgiver"],
    ["Fussilat", "Explained in detail"],
    ["Ash-Shura", "Consultation"],
    ["Az-Zukhruf", "Ornaments of gold"],
    ["Ad-Dukhaan", "The Smoke"],
    ["Al-Jaathiya", "Crouching"],
    ["Al-Ahqaf", "The Dunes"],
    ["Muhammad", "Muhammad"],
    ["Al-Fath", "The Victory"],
    ["Al-Hujuraat", "The Inner Apartments"],
    ["Qaaf", "The letter Qaaf"],
    ["Adh-Dhaariyat", "The Winnowing Winds"],
    ["At-Tur", "The Mount"],
    ["An-Najm", "The Star"],
    ["Al-Qamar", "The Moon"],
    ["Ar-Rahmaan", "The Beneficent"],
    ["Al-Waaqia", "The Inevitable"],
    ["Al-Hadid", "The Iron"],
    ["Al-Mujaadila", "The Pleading Woman"],
    ["Al-Hashr", "The Exile"],
    ["Al-Mumtahana", "She that is to be examined"],
    ["As-Saff", "The Ranks"],
    ["Al-Jumu'a", "Friday"],
    ["Al-Munaafiqoon", "The Hypocrites"],
    ["At-Taghaabun", "Mutual Disillusion"],
    ["At-Talaaq", "Divorce"],
    ["At-Tahrim", "The Prohibition"],
    ["Al-Mulk", "The Sovereignty"],
    ["Al-Qalam", "The Pen"],
    ["Al-Haaqqa", "The Reality"],
    ["Al-Ma'aarij", "The Ascending Stairways"],
    ["Nooh", "Noah"],
    ["Al-Jinn", "The Jinn"],
    ["Al-Muzzammil", "The Enshrouded One"],
    ["Al-Muddaththir", "The Cloaked One"],
    ["Al-Qiyaama", "The Resurrection"],
    ["Al-Insaan", "Man"],
    ["Al-Mursalaat", "The Emissaries"],
    ["An-Naba", "The Announcement"],
    ["An-Naazi'aat", "Those who drag forth"],
    ["Abasa", "He frowned"],
    ["At-Takwir", "The Overthrowing"],
    ["Al-Infitaar", "The Cleaving"],
    ["Al-Mutaffifin", "Defrauding"],
    ["Al-Inshiqaaq", "The Splitting Open"],
    ["Al-Burooj", "The Constellations"],
    ["At-Taariq", "The Morning Star"],
    ["Al-A'laa", "The Most High"],
    ["Al-Ghaashiya", "The Overwhelming"],
    ["Al-Fajr", "The Dawn"],
    ["Al-Balad", "The City"],
    ["Ash-Shams", "The Sun"],
    ["Al-Lail", "The Night"],
    ["Ad-Dhuhaa", "The Morning Hours"],
    ["Ash-Sharh", "The Consolation"],
    ["At-Tin", "The Fig"],
    ["Al-Alaq", "The Clot"],
    ["Al-Qadr", "The Power, Fate"],
    ["Al-Bayyina", "The Evidence"],
    ["Az-Zalzala", "The Earthquake"],
    ["Al-Aadiyaat", "The Chargers"],
    ["Al-Qaari'a", "The Calamity"],
    ["At-Takaathur", "Competition"],
    ["Al-Asr", "The Declining Day, Epoch"],
    ["Al-Humaza", "The Traducer"],
    ["Al-Fil", "The Elephant"],
    ["Quraish", "Quraysh"],
    ["Al-Maa'un", "Almsgiving"],
    ["Al-Kawthar", "Abundance"],
    ["Al-Kaafiroon", "The Disbelievers"],
    ["An-Nasr", "Divine Support"],
    ["Al-Masad", "The Palm Fibre"],
    ["Al-Ikhlaas", "Sincerity"],
    ["Al-Falaq", "The Dawn"],
    ["An-Naas", "Mankind"],
];

var suraNames = [
    [],
    ["Аль-Фатиха", "Открывающая Коран"],
    ["Аль-Бакара", "Корова"],
    ["Аль ‘Имран", "Семейство ‘Имрана"],
    ["Ан-Ниса", "Женщины"],
    ["Аль-Маида", "Трапеза"],
    ["Аль-Ан‘ам", "Скот"],
    ["Аль-А‘раф", "Ограды"],
    ["Аль-Анфаль", "Военная добыча"],
    ["Ат-Тауба", "Покаяние"],
    ["Юнус", "Иона"],
    ["Худ", "Худ"],
    ["Юсуф", "Иосиф"],
    ["Ар-Ра‘д", "Гром"],
    ["Ибрахим", "Авраам"],
    ["Аль-Хиджр", "Хиджр"],
    ["Ан-Нахль", "Пчёлы"],
    ["Аль-Исра", "Ночной перенос"],
    ["Аль-Кяхф", "Пещера"],
    ["Марьям", "Мария"],
    ["Та, ха", "Та, ха"],
    ["Аль-Анбия", "Пророки"],
    ["Аль-Хаджж", "Хадж"],
    ["Аль-Му’минун", "Верующие"],
    ["Ан-Нур", "Свет"],
    ["Аль-Фуркан", "Различение"],
    ["Аш-Шу‘ара", "Поэты"],
    ["Ан-Намль", "Муравьи"],
    ["Аль-Касас", "Рассказ"],
    ["Аль-‘Анкабут", "Паук"],
    ["Ар-Рум", "Ромеи"],
    ["Лукман", "Лукман"],
    ["Ас-Саджда", "Земной поклон"],
    ["Аль-Ахзаб", "Полчища"],
    ["Саба’", "Сава"],
    ["Фатыр", "Зиждитель"],
    ["Йа, син", "Йа, син"],
    ["Ас-Саффат", "Стоящие в ряд"],
    ["Сад", "Сад"],
    ["Аз-Зумар", "Толпы"],
    ["Гафир", "Прощающий"],
    ["Фуссылят", "Разъяснены"],
    ["Аш-Шура", "Совет"],
    ["Аз-Зухруф", "Украшения"],
    ["Ад-Духан", "Дым"],
    ["Аль-Джасия", "Коленопреклонённые"],
    ["Аль-Ахкаф", "Барханы"],
    ["Мухаммад", "Мухаммад"],
    ["Аль-Фатх", "Победа"],
    ["Аль-Худжурат", "Покои"],
    ["Каф", "Каф"],
    ["Аз-Зарият", "Рассеивающие"],
    ["Ат-Тур", "Гора"],
    ["Ан-Наджм", "Звезда"],
    ["Аль-Камар", "Луна"],
    ["Ар-Рахман", "Милостивый"],
    ["Аль-Ваки‘а", "Неизбежное"],
    ["Аль-Хадид", "Железо"],
    ["Аль-Муджадиля", "Препирающаяся"],
    ["Аль-Хашр", "Сбор"],
    ["Аль-Мумтахана", "Испытуемая"],
    ["Ас-Сафф", "Ряд"],
    ["Аль-Джуму‘а", "Собрание"],
    ["Аль-Мунафикун", "Лицемеры"],
    ["Ат-Тагабун", "Обделение"],
    ["Ат-Таляк", "Развод"],
    ["Ат-Тахрим", "Запрещение"],
    ["Аль-Мульк", "Власть"],
    ["Аль-Калям", "Перо"],
    ["Аль-Хакка", "Неминуемое"],
    ["Аль-Ма‘аридж", "Степени"],
    ["Нух", "Ной"],
    ["Аль-Джинн", "Джинны"],
    ["Аль-Муззаммиль", "Закутавшийся"],
    ["Аль-Муддассир", "Завернувшийся"],
    ["Аль-Кияма", "Воскресение"],
    ["Аль-Инсан", "Человек"],
    ["Аль-Мурсалят", "Посылаемые"],
    ["Ан-Наба’", "Весть"],
    ["Ан-Нази‘ат", "Вырывающие"],
    ["‘Абаса", "Нахмурился"],
    ["Ат-Таквир", "Сворачивание"],
    ["Аль-Инфитар", "Раскалывание"],
    ["Аль-Мутаффифин", "Обвешивающие"],
    ["Аль-Иншикак", "Разверзнется"],
    ["Аль-Бурудж", "Созвездия"],
    ["Ат-Тарик", "Ночной гость"],
    ["Аль-А‘ля", "Всевышний"],
    ["Аль-Гашия", "Покрывающее"],
    ["Аль-Фаджр", "Заря"],
    ["Аль-Баляд", "Город"],
    ["Аш-Шамс", "Солнце"],
    ["Аль-Лейль", "Ночь"],
    ["Ад-Духа", "Утро"],
    ["Аль-Инширах", "Раскрытие"],
    ["Ат-Тин", "Смоковница"],
    ["Аль-‘Аляк", "Сгусток крови"],
    ["Аль-Кадр", "Величие"],
    ["Аль-Баййина", "Ясный довод"],
    ["Аз-Зальзаля", "Сотрясение"],
    ["Аль-‘Адият", "Скачущие"],
    ["Аль-Кари‘а", "Поражающее"],
    ["Ат-Такясур", "Соперничество"],
    ["Аль-‘Аср", "Предвечернее время"],
    ["Аль-Хумаза", "Хулитель"],
    ["Аль-Филь", "Слон"],
    ["Курайш", "Курайшиты"],
    ["Аль-Ма‘ун", "Утварь"],
    ["Аль-Каусар", "Каусар"],
    ["Аль-Кяфирун", "Неверующие"],
    ["Ан-Наср", "Помощь"],
    ["Аль-Масад", "Пальмовые волокна"],
    ["Аль-Ихляс", "Очищение веры"],
    ["Аль-Фаляк", "Рассвет"],
    ["Ан-Нас", "Люди"],
];

var RukuList = [
    0, 1, 8, 15, 28, 37, 47, 54, 67, 69, 79, 90, 94, 104, 111, 120, 129, 137, 149,
    155, 160, 171, 175, 184, 190, 196, 204, 218, 224, 229, 236, 239, 243, 250,
    256, 261, 265, 268, 274, 281, 289, 291, 294, 303, 314, 324, 335, 348, 357,
    365, 374, 385, 395, 403, 414, 423, 437, 442, 449, 465, 474, 483, 494, 504,
    508, 516, 519, 527, 536, 544, 553, 564, 570, 581, 585, 590, 594, 598, 606,
    609, 620, 628, 635, 646, 656, 665, 670, 675, 681, 689, 696, 704, 713, 720,
    726, 736, 747, 756, 763, 770, 778, 785, 790, 800, 810, 820, 831, 840, 845,
    850, 860, 872, 880, 884, 890, 900, 911, 919, 930, 934, 940, 944, 955, 965,
    980, 986, 994, 1002, 1008, 1013, 1019, 1027, 1039, 1048, 1054, 1063, 1081,
    1084, 1096, 1102, 1106, 1112, 1117, 1126, 1136, 1143, 1161, 1171, 1180, 1189,
    1198, 1205, 1209, 1219, 1225, 1230, 1236, 1242, 1252, 1260, 1265, 1273, 1278,
    1295, 1302, 1308, 1316, 1325, 1335, 1346, 1354, 1358, 1365, 1375, 1385, 1395,
    1405, 1418, 1425, 1435, 1447, 1457, 1468, 1474, 1482, 1498, 1509, 1523, 1534,
    1542, 1557, 1569, 1583, 1597, 1603, 1617, 1626, 1632, 1639, 1646, 1654, 1665,
    1676, 1690, 1701, 1708, 1715, 1726, 1734, 1739, 1745, 1751, 1757, 1763, 1772,
    1778, 1785, 1792, 1803, 1818, 1828, 1847, 1863, 1882, 1902, 1911, 1923, 1927,
    1936, 1942, 1952, 1962, 1967, 1972, 1978, 1985, 1991, 2002, 2012, 2021, 2030,
    2040, 2052, 2060, 2070, 2082, 2090, 2100, 2107, 2114, 2123, 2130, 2141, 2153,
    2158, 2163, 2172, 2185, 2190, 2194, 2200, 2211, 2223, 2242, 2251, 2266, 2291,
    2301, 2316, 2333, 2349, 2373, 2403, 2425, 2438, 2453, 2464, 2477, 2484, 2494,
    2513, 2525, 2534, 2559, 2577, 2596, 2606, 2618, 2621, 2629, 2634, 2644, 2653,
    2660, 2668, 2674, 2696, 2706, 2724, 2751, 2766, 2792, 2802, 2812, 2818, 2826,
    2832, 2842, 2849, 2853, 2856, 2865, 2876, 2890, 2900, 2916, 2933, 2942, 2966,
    2985, 3002, 3037, 3055, 3073, 3092, 3108, 3124, 3160, 3174, 3191, 3204, 3218,
    3226, 3242, 3253, 3266, 3274, 3281, 3295, 3303, 3313, 3328, 3341, 3354, 3363,
    3371, 3385, 3392, 3404, 3410, 3420, 3429, 3437, 3450, 3463, 3470, 3481, 3489,
    3504, 3515, 3526, 3534, 3542, 3554, 3561, 3568, 3574, 3586, 3592, 3602, 3607,
    3616, 3628, 3637, 3643, 3652, 3661, 3668, 3675, 3687, 3698, 3706, 3718, 3738,
    3756, 3773, 3789, 3810, 3863, 3902, 3927, 3971, 3985, 3997, 4011, 4035, 4059,
    4068, 4080, 4090, 4100, 4111, 4122, 4129, 4134, 4143, 4154, 4161, 4171, 4184,
    4194, 4202, 4212, 4219, 4227, 4237, 4244, 4251, 4263, 4273, 4282, 4292, 4302,
    4316, 4326, 4341, 4351, 4361, 4371, 4382, 4393, 4415, 4444, 4457, 4474, 4485,
    4495, 4500, 4511, 4521, 4531, 4537, 4546, 4557, 4565, 4574, 4584, 4594, 4601,
    4610, 4613, 4623, 4631, 4646, 4660, 4676, 4699, 4722, 4736, 4764, 4785, 4810,
    4817, 4847, 4869, 4887, 4902, 4927, 4947, 4980, 5018, 5054, 5076, 5086, 5095,
    5101, 5105, 5111, 5118, 5127, 5137, 5144, 5151, 5157, 5164, 5173, 5178, 5186,
    5189, 5197, 5200, 5210, 5218, 5225, 5230, 5237, 5242, 5256, 5272, 5305, 5324,
    5361, 5376, 5411, 5420, 5440, 5448, 5467, 5476, 5495, 5496, 5527, 5552, 5582,
    5592, 5614, 5623, 5663, 5673, 5703, 5713, 5739, 5759, 5801, 5830, 5849, 5885,
    5910, 5932, 5949, 5968, 5994, 6024, 6044, 6059, 6080, 6091, 6099, 6107, 6126,
    6131, 6139, 6147, 6158, 6169, 6177, 6180, 6189, 6194, 6198, 6205, 6208, 6214,
    6217, 6222, 6226, 6231, 6237,
];

var meta = Object.freeze({
    numAyas: 6236,
    numSuras: 114,
    numPages: 604,
    numJuzs: 30,
    manzilCount: 7,
});

function checkValidSurah(surah, checkOnly) {
    if (checkOnly === void 0) { checkOnly = false; }
    if (surah < 1 || surah > meta.numSuras) {
        if (checkOnly)
            return false;
        throw new RangeError("Surah must be between 1 and " + meta.numSuras);
    }
    return true;
}

var SuraList = [
    [-1, -1, -1, -1, "", false, -1],
    [0, 7, 5, 1, "الفاتحة", true, 1],
    [7, 286, 87, 40, "البقرة", false, 2],
    [293, 200, 89, 20, "آل عمران", false, 50],
    [493, 176, 92, 24, "النساء", false, 77],
    [669, 120, 112, 16, "المائدة", false, 107],
    [789, 165, 55, 20, "الأنعام", true, 128],
    [954, 206, 39, 24, "الأعراف", true, 151],
    [1160, 75, 88, 10, "الأنفال", false, 177],
    [1235, 129, 113, 16, "التوبة", false, 187],
    [1364, 109, 51, 11, "يونس", true, 208],
    [1473, 123, 52, 10, "هود", true, 222],
    [1596, 111, 53, 12, "يوسف", true, 236],
    [1707, 43, 96, 6, "الرعد", false, 249],
    [1750, 52, 72, 7, "ابراهيم", true, 256],
    [1802, 99, 54, 6, "الحجر", true, 262],
    [1901, 128, 70, 16, "النحل", true, 268],
    [2029, 111, 50, 12, "الإسراء", true, 282],
    [2140, 110, 69, 12, "الكهف", true, 294],
    [2250, 98, 44, 6, "مريم", true, 305],
    [2348, 135, 45, 8, "طه", true, 313],
    [2483, 112, 73, 7, "الأنبياء", true, 322],
    [2595, 78, 103, 10, "الحج", false, 332],
    [2673, 118, 74, 6, "المؤمنون", true, 342],
    [2791, 64, 102, 9, "النور", false, 350],
    [2855, 77, 42, 6, "الفرقان", true, 360],
    [2932, 227, 47, 11, "الشعراء", true, 367],
    [3159, 93, 48, 7, "النمل", true, 377],
    [3252, 88, 49, 8, "القصص", true, 386],
    [3340, 69, 85, 7, "العنكبوت", true, 397],
    [3409, 60, 84, 6, "الروم", true, 405],
    [3469, 34, 57, 3, "لقمان", true, 411],
    [3503, 30, 75, 3, "السجدة", true, 415],
    [3533, 73, 90, 9, "الأحزاب", false, 418],
    [3606, 54, 58, 6, "سبإ", true, 428],
    [3660, 45, 43, 5, "فاطر", true, 435],
    [3705, 83, 41, 5, "يس", true, 441],
    [3788, 182, 56, 5, "الصافات", true, 446],
    [3970, 88, 38, 5, "ص", true, 453],
    [4058, 75, 59, 8, "الزمر", true, 459],
    [4133, 85, 60, 9, "غافر", true, 468],
    [4218, 54, 61, 6, "فصلت", true, 477],
    [4272, 53, 62, 5, "الشورى", true, 483],
    [4325, 89, 63, 7, "الزخرف", true, 490],
    [4414, 59, 64, 3, "الدخان", true, 496],
    [4473, 37, 65, 4, "الجاثية", true, 499],
    [4510, 35, 66, 4, "الأحقاف", true, 503],
    [4545, 38, 95, 4, "محمد", false, 507],
    [4583, 29, 111, 4, "الفتح", false, 511],
    [4612, 18, 106, 2, "الحجرات", false, 516],
    [4630, 45, 34, 3, "ق", true, 518],
    [4675, 60, 67, 3, "الذاريات", true, 521],
    [4735, 49, 76, 2, "الطور", true, 524],
    [4784, 62, 23, 3, "النجم", true, 526],
    [4846, 55, 37, 3, "القمر", true, 529],
    [4901, 78, 97, 3, "الرحمن", false, 532],
    [4979, 96, 46, 3, "الواقعة", true, 535],
    [5075, 29, 94, 4, "الحديد", false, 538],
    [5104, 22, 105, 3, "المجادلة", false, 542],
    [5126, 24, 101, 3, "الحشر", false, 546],
    [5150, 13, 91, 2, "الممتحنة", false, 549],
    [5163, 14, 109, 2, "الصف", false, 552],
    [5177, 11, 110, 2, "الجمعة", false, 553],
    [5188, 11, 104, 2, "المنافقون", false, 555],
    [5199, 18, 108, 2, "التغابن", false, 556],
    [5217, 12, 99, 2, "الطلاق", false, 558],
    [5229, 12, 107, 2, "التحريم", false, 560],
    [5241, 30, 77, 2, "الملك", true, 562],
    [5271, 52, 2, 2, "القلم", true, 565],
    [5323, 52, 78, 2, "الحاقة", true, 567],
    [5375, 44, 79, 2, "المعارج", true, 569],
    [5419, 28, 71, 2, "نوح", true, 571],
    [5447, 28, 40, 2, "الجن", true, 572],
    [5475, 20, 3, 2, "المزمل", true, 574],
    [5495, 56, 4, 2, "المدثر", true, 576],
    [5551, 40, 31, 2, "القيامة", true, 578],
    [5591, 31, 98, 2, "الانسان", false, 579],
    [5622, 50, 33, 2, "المرسلات", true, 581],
    [5672, 40, 80, 2, "النبإ", true, 582],
    [5712, 46, 81, 2, "النازعات", true, 584],
    [5758, 42, 24, 1, "عبس", true, 585],
    [5800, 29, 7, 1, "التكوير", true, 586],
    [5829, 19, 82, 1, "الإنفطار", true, 587],
    [5848, 36, 86, 1, "المطففين", true, 588],
    [5884, 25, 83, 1, "الإنشقاق", true, 589],
    [5909, 22, 27, 1, "البروج", true, 590],
    [5931, 17, 36, 1, "الطارق", true, 591],
    [5948, 19, 8, 1, "الأعلى", true, 592],
    [5967, 26, 68, 1, "الغاشية", true, 592],
    [5993, 30, 10, 1, "الفجر", true, 593],
    [6023, 20, 35, 1, "البلد", true, 594],
    [6043, 15, 26, 1, "الشمس", true, 595],
    [6058, 21, 9, 1, "الليل", true, 596],
    [6079, 11, 11, 1, "الضحى", true, 596],
    [6090, 8, 12, 1, "الشرح", true, 596],
    [6098, 8, 28, 1, "التين", true, 597],
    [6106, 19, 1, 1, "العلق", true, 597],
    [6125, 5, 25, 1, "القدر", true, 598],
    [6130, 8, 100, 1, "البينة", false, 599],
    [6138, 8, 93, 1, "الزلزلة", false, 599],
    [6146, 11, 14, 1, "العاديات", true, 600],
    [6157, 11, 30, 1, "القارعة", true, 600],
    [6168, 8, 16, 1, "التكاثر", true, 600],
    [6176, 3, 13, 1, "العصر", true, 601],
    [6179, 9, 32, 1, "الهمزة", true, 601],
    [6188, 5, 19, 1, "الفيل", true, 601],
    [6193, 4, 29, 1, "قريش", true, 602],
    [6197, 7, 17, 1, "الماعون", true, 602],
    [6204, 3, 15, 1, "الكوثر", true, 602],
    [6207, 6, 18, 1, "الكافرون", true, 603],
    [6213, 3, 114, 1, "النصر", false, 603],
    [6216, 5, 6, 1, "المسد", true, 603],
    [6221, 4, 22, 1, "الإخلاص", true, 604],
    [6225, 5, 20, 1, "الفلق", true, 604],
    [6230, 6, 21, 1, "الناس", true, 604],
    [6236, 0, -1, -1, "", false, -1],
];

function getSurahMeta(surah) {
    checkValidSurah(surah);
    return SuraList[surah];
}

function checkValidSurahAyah(surah, ayah, checkOnly) {
    if (checkOnly === void 0) { checkOnly = false; }
    if (!checkValidSurah(surah, checkOnly))
        return false;
    var _a = getSurahMeta(surah); _a[0]; var ayahCount = _a[1];
    if (ayah < 1 || ayah > ayahCount) {
        if (checkOnly)
            return false;
        throw new RangeError("Ayah must be between 1 and " + ayahCount);
    }
    return true;
}

function ayaStringSplitter(str) {
    var _a = str.trim().split(":"), surahStr = _a[0], ayahsStr = _a[1];
    var surah = parseInt(surahStr, 10);
    if (isNaN(surah)) {
        throw "Error in surah format " + str;
    }
    if (!ayahsStr) {
        throw "Error in data " + str;
    }
    var ayahs;
    if (ayahsStr.includes("-")) {
        ayahs = ayahsStr.split("-").map(function (a) {
            var ayah = parseInt(a, 10);
            if (isNaN(ayah) || ayah === 0) {
                throw "Error in ayah " + a;
            }
            return ayah;
        });
        if (ayahs[0] > ayahs[1])
            throw "Error in ayah range " + str;
    }
    else {
        ayahs = parseInt(ayahsStr, 10);
        if (isNaN(ayahs) || ayahs === 0) {
            throw "Error in data " + str;
        }
        checkValidSurahAyah(surah, ayahs);
    }
    return [surah, ayahs];
}

function checkValidAyahId(ayaId) {
    if (ayaId < 1 || ayaId > meta.numAyas)
        throw new RangeError("ayaid must be between 1 and " + meta.numAyas);
    return true;
}

function findAyaidBySurah(surah, ayah) {
    checkValidSurahAyah(surah, ayah);
    var startAyahId = getSurahMeta(surah)[0];
    return startAyahId + ayah;
}

var JuzList = [
    0, 1, 149, 260, 386, 517, 641, 751, 900, 1042, 1201, 1328, 1479, 1649, 1803,
    2030, 2215, 2484, 2674, 2876, 3215, 3386, 3564, 3733, 4090, 4265, 4511, 4706,
    5105, 5242, 5673, 6237,
];

function findJuzByAyaid(ayaId) {
    checkValidAyahId(ayaId);
    return JuzList.findIndex(function (x) { return x > ayaId; }) - 1;
}

function findJuz(surah, ayah, ayahMode) {
    if (ayah === void 0) { ayah = 1; }
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? ayah
        : (checkValidSurahAyah(surah, ayah) && findAyaidBySurah(surah, ayah));
    return findJuzByAyaid(ayahId);
}

function findSurahByAyaid(ayaId) {
    checkValidAyahId(ayaId);
    var suraNum = SuraList.findIndex(function (x) { return x[0] >= ayaId; }) - 1;
    return [suraNum, ayaId - SuraList[suraNum][0]];
}

function findJuzAndShift(surah, ayah, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    var juz = findJuzByAyaid(ayahId);
    var leftAyahId = JuzList[juz];
    if (ayahMode)
        surah = findSurahByAyaid(ayahId)[0];
    var surahStartAyahId = SuraList[surah][0];
    return {
        juz: juz,
        ayahsBetweenJuzSurah: surahStartAyahId - leftAyahId + 1,
        leftAyahId: leftAyahId
    };
}

var HizbQuarterList = [
    0, 1, 33, 51, 67, 82, 99, 113, 131, 149, 165, 184, 196, 210, 226, 240, 250,
    260, 270, 279, 290, 308, 326, 345, 368, 386, 406, 426, 446, 464, 479, 494,
    505, 517, 529, 551, 567, 581, 593, 607, 628, 641, 656, 670, 681, 696, 710,
    720, 736, 751, 766, 778, 802, 825, 848, 863, 884, 900, 916, 930, 940, 955,
    985, 1001, 1019, 1042, 1071, 1096, 1110, 1125, 1143, 1161, 1182, 1201, 1221,
    1236, 1254, 1269, 1281, 1295, 1310, 1328, 1346, 1357, 1375, 1390, 1417, 1435,
    1454, 1479, 1497, 1514, 1534, 1557, 1581, 1603, 1626, 1649, 1673, 1697, 1712,
    1726, 1742, 1760, 1778, 1803, 1852, 1902, 1931, 1952, 1976, 1991, 2012, 2030,
    2052, 2079, 2099, 2128, 2157, 2172, 2191, 2215, 2239, 2272, 2309, 2349, 2403,
    2431, 2459, 2484, 2512, 2534, 2566, 2596, 2614, 2633, 2655, 2674, 2709, 2748,
    2792, 2812, 2826, 2844, 2856, 2876, 2908, 2933, 2984, 3043, 3113, 3160, 3186,
    3215, 3241, 3264, 3281, 3303, 3328, 3341, 3366, 3386, 3410, 3440, 3463, 3491,
    3514, 3534, 3551, 3564, 3584, 3593, 3616, 3630, 3652, 3675, 3701, 3733, 3765,
    3810, 3871, 3933, 3991, 4022, 4066, 4090, 4111, 4134, 4154, 4174, 4199, 4227,
    4243, 4265, 4285, 4299, 4323, 4349, 4382, 4431, 4485, 4511, 4531, 4555, 4578,
    4601, 4613, 4626, 4657, 4706, 4759, 4810, 4855, 4902, 4980, 5054, 5091, 5105,
    5118, 5137, 5157, 5178, 5192, 5218, 5230, 5242, 5272, 5324, 5394, 5448, 5495,
    5552, 5610, 5673, 5759, 5830, 5885, 5949, 6024, 6091, 6155, 6237,
];

function findJuzHizbByAyaid(ayaId) {
    checkValidAyahId(ayaId);
    var juz = findJuzByAyaid(ayaId);
    var id = HizbQuarterList.findIndex(function (x) { return x > ayaId; }) - 1;
    return { juz: juz, hizb: id % 8 || 8, id: id };
}

function findJuzHizb(surah, ayah, ayahMode) {
    if (ayah === void 0) { ayah = 1; }
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? ayah
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return findJuzHizbByAyaid(ayahId);
}

function findJuzMetaBySurah(surah, ayah) {
    if (ayah === void 0) { ayah = 1; }
    var _a = findJuzAndShift(surah, ayah), leftjuz = _a.juz, ayahsBetweenJuzSurah = _a.ayahsBetweenJuzSurah, leftAyahId = _a.leftAyahId;
    var rightJuz = leftjuz;
    while (rightJuz < meta.numJuzs &&
        findSurahByAyaid(JuzList[rightJuz + 1])[0] == surah)
        rightJuz++;
    return {
        leftjuz: leftjuz,
        ayahsBetweenJuzSurah: ayahsBetweenJuzSurah,
        rightJuz: rightJuz,
        leftAyahId: leftAyahId,
        rightAyahId: JuzList[rightJuz + 1],
    };
}

var PageList = [
    0, 1, 8, 13, 24, 32, 37, 45, 56, 65, 69, 77, 84, 91, 96, 101, 109, 113, 120,
    127, 134, 142, 149, 153, 161, 171, 177, 184, 189, 194, 198, 204, 210, 218,
    223, 227, 232, 238, 241, 245, 253, 256, 260, 264, 267, 272, 277, 282, 289,
    290, 294, 303, 309, 316, 323, 331, 339, 346, 355, 364, 371, 377, 385, 394,
    402, 409, 415, 426, 434, 442, 447, 451, 459, 467, 474, 480, 488, 494, 500,
    505, 508, 513, 517, 520, 527, 531, 538, 545, 553, 559, 568, 573, 580, 585,
    588, 595, 599, 607, 615, 621, 628, 634, 641, 648, 656, 664, 669, 672, 675,
    679, 683, 687, 693, 701, 706, 711, 715, 720, 727, 734, 740, 746, 752, 759,
    765, 773, 778, 783, 790, 798, 808, 817, 825, 834, 842, 849, 858, 863, 871,
    880, 884, 891, 900, 908, 914, 921, 927, 932, 936, 941, 947, 955, 966, 977,
    985, 992, 998, 1006, 1012, 1022, 1028, 1036, 1042, 1050, 1059, 1075, 1085,
    1092, 1098, 1104, 1110, 1114, 1118, 1125, 1133, 1142, 1150, 1161, 1169, 1177,
    1186, 1194, 1201, 1206, 1213, 1222, 1230, 1236, 1242, 1249, 1256, 1262, 1267,
    1272, 1276, 1283, 1290, 1297, 1304, 1308, 1315, 1322, 1329, 1335, 1342, 1347,
    1353, 1358, 1365, 1371, 1379, 1385, 1390, 1398, 1407, 1418, 1426, 1435, 1443,
    1453, 1462, 1471, 1479, 1486, 1493, 1502, 1511, 1519, 1527, 1536, 1545, 1555,
    1562, 1571, 1582, 1591, 1601, 1611, 1619, 1627, 1634, 1640, 1649, 1660, 1666,
    1675, 1683, 1692, 1700, 1708, 1713, 1721, 1726, 1736, 1742, 1750, 1756, 1761,
    1769, 1775, 1784, 1793, 1803, 1818, 1834, 1854, 1873, 1893, 1908, 1916, 1928,
    1936, 1944, 1956, 1966, 1974, 1981, 1989, 1995, 2004, 2012, 2020, 2030, 2037,
    2047, 2057, 2068, 2079, 2088, 2096, 2105, 2116, 2126, 2134, 2145, 2156, 2161,
    2168, 2175, 2186, 2194, 2202, 2215, 2224, 2238, 2251, 2262, 2276, 2289, 2302,
    2315, 2327, 2346, 2361, 2386, 2400, 2413, 2425, 2436, 2447, 2462, 2474, 2484,
    2494, 2508, 2519, 2528, 2541, 2556, 2565, 2574, 2585, 2596, 2601, 2611, 2619,
    2626, 2634, 2642, 2651, 2660, 2668, 2674, 2691, 2701, 2716, 2733, 2748, 2763,
    2778, 2792, 2802, 2812, 2819, 2823, 2828, 2835, 2845, 2850, 2853, 2858, 2867,
    2876, 2888, 2899, 2911, 2923, 2933, 2952, 2972, 2993, 3016, 3044, 3069, 3092,
    3116, 3139, 3160, 3173, 3182, 3195, 3204, 3215, 3223, 3236, 3248, 3258, 3266,
    3274, 3281, 3288, 3296, 3303, 3312, 3323, 3330, 3337, 3347, 3355, 3364, 3371,
    3379, 3386, 3393, 3404, 3415, 3425, 3434, 3442, 3451, 3460, 3470, 3481, 3489,
    3498, 3504, 3515, 3524, 3534, 3540, 3549, 3556, 3564, 3569, 3577, 3584, 3588,
    3596, 3607, 3614, 3621, 3629, 3638, 3646, 3655, 3664, 3672, 3679, 3691, 3699,
    3705, 3718, 3733, 3746, 3760, 3776, 3789, 3813, 3840, 3865, 3891, 3915, 3942,
    3971, 3987, 3997, 4013, 4032, 4054, 4064, 4069, 4080, 4090, 4099, 4106, 4115,
    4126, 4133, 4141, 4150, 4159, 4167, 4174, 4183, 4192, 4200, 4211, 4219, 4230,
    4239, 4248, 4257, 4265, 4273, 4283, 4288, 4295, 4304, 4317, 4324, 4336, 4348,
    4359, 4373, 4386, 4399, 4415, 4433, 4454, 4474, 4487, 4496, 4506, 4516, 4525,
    4531, 4539, 4546, 4557, 4565, 4575, 4584, 4593, 4599, 4607, 4612, 4617, 4624,
    4631, 4646, 4666, 4682, 4706, 4727, 4750, 4767, 4785, 4811, 4829, 4853, 4874,
    4896, 4918, 4942, 4969, 4996, 5030, 5056, 5079, 5087, 5094, 5100, 5105, 5111,
    5116, 5126, 5130, 5136, 5143, 5151, 5156, 5162, 5169, 5178, 5186, 5193, 5200,
    5209, 5218, 5223, 5230, 5237, 5242, 5254, 5268, 5287, 5314, 5332, 5358, 5386,
    5415, 5430, 5448, 5461, 5476, 5495, 5513, 5543, 5571, 5597, 5617, 5642, 5673,
    5703, 5728, 5759, 5801, 5830, 5855, 5883, 5910, 5932, 5964, 5994, 6017, 6044,
    6073, 6099, 6126, 6138, 6156, 6177, 6194, 6208, 6222, 6237,
];

function findPage(surah, ayah, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return PageList.findIndex(function (x) { return x > ayahId; }) - 1;
}

function findRangeAroundAyah(surah, ayah, mode, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? ayah
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    switch (mode) {
        case "juz": {
            var juz = findJuzByAyaid(ayahId);
            return [JuzList[juz], JuzList[juz + 1] - 1];
        }
        case "surah": {
            return [SuraList[surah][0] + 1, SuraList[surah + 1][0]];
        }
        case "ayah": {
            return [ayahId, ayahId];
        }
        case "page": {
            var page = findPage(-1, ayahId, true);
            return [PageList[page], PageList[page + 1] - 1];
        }
        case "all":
        default:
            return [1, meta.numAyas];
    }
}

function getAyaCountinSura(surah) {
    return getSurahMeta(surah)[1];
}

function binarySearch(ar, el, compare_fn) {
    if (compare_fn === void 0) { compare_fn = function (a, b) { return a - b; }; }
    var m = 0;
    var n = ar.length - 1;
    while (m <= n) {
        var k = (n + m) >> 1;
        var cmp = compare_fn(el, ar[k]);
        if (cmp > 0) {
            m = k + 1;
        }
        else if (cmp < 0) {
            n = k - 1;
        }
        else {
            return k;
        }
    }
    return -m - 1;
}

function isAyahJuzFirst(surah, ayah, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return binarySearch(JuzList, ayahId);
}

function isAyahPageFirst(surah, ayah, ayahMode) {
    if (ayahMode === void 0) { ayahMode = false; }
    var ayahId = ayahMode
        ? (checkValidAyahId(ayah) && ayah)
        : (checkValidSurah(surah) && findAyaidBySurah(surah, ayah));
    return binarySearch(PageList, ayahId);
}

var ManzilList = [0, 1, 670, 1365, 2030, 2933, 3789, 4631, 6237];

var SajdaList = [
    [1160, "recommended"],
    [1722, "recommended"],
    [1951, "recommended"],
    [2138, "recommended"],
    [2308, "recommended"],
    [2613, "recommended"],
    [2672, "recommended"],
    [2915, "recommended"],
    [3185, "recommended"],
    [3518, "obligatory"],
    [3994, "recommended"],
    [4256, "obligatory"],
    [4846, "obligatory"],
    [5905, "recommended"],
    [6125, "obligatory"],
];

function nextAyah(surah, ayah) {
    if (surah < 1 || surah > meta.numSuras)
        throw new RangeError("Surah must be between 1 and " + meta.numSuras);
    var ayaid = findAyaidBySurah(surah, ayah);
    return findSurahByAyaid(ayaid == meta.numAyas ? 1 : ayaid + 1);
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function pageMeta(pageNum) {
    if (pageNum < 1 || pageNum > meta.numPages)
        throw new RangeError("pagenum must be between 1 and " + meta.numPages);
    var _a = [
        PageList[pageNum],
        PageList[pageNum + 1],
    ], curPage = _a[0], nextPage = _a[1];
    return {
        pageNum: pageNum,
        first: findSurahByAyaid(curPage),
        last: __spreadArray([], findSurahByAyaid(nextPage - 1), true),
    };
}

function prevAyah(surah, ayah) {
    checkValidSurah(surah);
    var ayaid = findAyaidBySurah(surah, ayah);
    return findSurahByAyaid(ayaid == 1 ? meta.numAyas : ayaid - 1);
}

exports.HizbQuarterList = HizbQuarterList;
exports.JuzList = JuzList;
exports.ManzilList = ManzilList;
exports.PageList = PageList;
exports.RukuList = RukuList;
exports.SajdaList = SajdaList;
exports.SuraList = SuraList;
exports.ayaStringSplitter = ayaStringSplitter;
exports.checkValidAyahId = checkValidAyahId;
exports.checkValidSurah = checkValidSurah;
exports.checkValidSurahAyah = checkValidSurahAyah;
exports.findAyaidBySurah = findAyaidBySurah;
exports.findJuz = findJuz;
exports.findJuzAndShift = findJuzAndShift;
exports.findJuzByAyaid = findJuzByAyaid;
exports.findJuzHizb = findJuzHizb;
exports.findJuzHizbByAyaid = findJuzHizbByAyaid;
exports.findJuzMetaBySurah = findJuzMetaBySurah;
exports.findPage = findPage;
exports.findRangeAroundAyah = findRangeAroundAyah;
exports.findSurahByAyaid = findSurahByAyaid;
exports.getAyaCountinSura = getAyaCountinSura;
exports.getSurahMeta = getSurahMeta;
exports.isAyahJuzFirst = isAyahJuzFirst;
exports.isAyahPageFirst = isAyahPageFirst;
exports.meta = meta;
exports.nextAyah = nextAyah;
exports.pageMeta = pageMeta;
exports.prevAyah = prevAyah;
exports.suraNamesEn = suraNames$1;
exports.suraNamesRu = suraNames;
//# sourceMappingURL=quran-meta.common.js.map
