# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.


## v4.0.4-7

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v4.0.4-6...v4.0.4-7)

### 🚀 Enhancements

- Add findRukuByAyahId (b89a77d)

### 🏡 Chore

- Some cleanup and optimization (9fa71df)

### ❤️ Contributors

- HG ([@husayt](https://github.com/husayt))

## v4.0.4-6

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v4.0.4-5...v4.0.4-6)

## v4.0.4-5

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v4.0.4-4...v4.0.4-5)

## v4.0.4-4

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v4.0.4-3...v4.0.4-4)

### 🚀 Enhancements

- Add rukus to meta (0845054)

### ❤️ Contributors

- HG ([@husayt](https://github.com/husayt))

## v4.0.4-3

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v4.0.4-2...v4.0.4-3)

## v4.0.4-2

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v4.0.4-1...v4.0.4-2)

## v4.0.4-1

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v4.0.4-0...v4.0.4-1)

## v4.0.4-0

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v4.0.3...v4.0.4-0)

### 🚀 Enhancements

- Added getAyahMetasForSurah (a696010)

### ❤️ Contributors

- HG ([@husayt](https://github.com/husayt))

## v4.0.3

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v4.0.2...v4.0.3)


### 🏡 Chore

- Remove isValidAyahCountBetweenJuzSurah function for now (382d938)

### ❤️ Contributors

- HG ([@husayt](https://github.com/husayt))

## v4.0.1

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v4.0.1-0...v4.0.1)

**Breaking changes in this version**

We apologize for any inconvenience caused by the recent breaking changes. These updates were essential to ensure safer and more error-free development in the future. The primary reasons for these changes include:

- Enhancing type safety to prevent errors.
- Providing clear and predictable behavior.

By leveraging TypeScript and proper type usage, many issues can be identified early, saving users from encountering hard-to-find errors later on.


* Number of functions have been renamed to be consistent
* `findSurahByAyahId` renamed to `findSurahAyahByAyahId` and new `findSurahAyahByAyahId` is different
* check for other changes

### 🚀 Enhancements

- Add new Surah String Parser `surahStringParser` (6620546)
- Added `string2NumberSplitter` and `string2NumberSplitterStrict`
- Added strict mode to `ayahStringSplitter`
- Updated `findRubAlHizb` (872b479)
- Better type guards (472366e)
- Added type guards for Hizb and RubAlhizb
- Add more guards and `getJuzMeta` function (1a6bbe2)

### 🏡 Chore

- 100% Test coverage again (254d6fd)
- Updated dependencies (7240e2b)
- Update API docs (742b364)
- Improve tests (5fa2345)
- Add missing methods (d1e5712)
- Updated docs (8cf8fe4)
- Add more checks (4a3640a)
- Fix docs (e953d37)

### ❤️ Contributors

- HG ([@husayt](http://github.com/husayt))

## v4.0.1-0

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v3.2.1...v4.0.1-0)

### 🚀 Enhancements

- Major update better types and many fixes (b556bc9)

### 🏡 Chore

- Fix tests (15f22bd)
- Fix docs (85dc3a8)

### ❤️ Contributors

- HG ([@husayt](http://github.com/husayt))

## v3.2.1

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v3.2.0...v3.2.1)

### 🚀 Enhancements

- Update dependencies (642c2e0)

### 🏡 Chore

- Update dependencies (ede0cbf)

### ❤️ Contributors

- HG ([@husayt](http://github.com/husayt))


## v3.2.0

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v3.1.1-0...v3.2.0)

### 🚀 Enhancements

- Update dependencies (be0d65b)

### ❤️ Contributors

- HG ([@husayt](http://github.com/husayt))

## v3.1.1-0

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v3.1.0...v3.1.1-0)

### 🚀 Enhancements

- Add getList Method (5f17784)

### 🏡 Chore

- Update Readme (7a542ed)

### ❤️ Contributors

- HG ([@husayt](http://github.com/husayt))

## v3.1.0

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v3.0.1...v3.1.0)

### 🚀 Enhancements

- Add turkish and Azerbaijani surahNames (7d17ce2)

### 🏡 Chore

- More test cases (9d32a28)

### ❤️ Contributors

- HG ([@husayt](http://github.com/husayt))

## v3.0.1

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v3.0.1-9...v3.0.1)

## v3.0.1-beta

This version is a complete rewrite of the project. Functionality has been greatly extended, most of the functions have been renamed and new ones have been added. 

Full unit test coverage has been achieved. Furthermore, in order to guarantee absolute data correctness framework for Cross-Checking  against other apis has been added.

### 🚀 Enhancements

- Rename sura to surah in exported names (74df866)
- Add meta rukuCount (b41dfe9)
- Add  validation and cross check against other apis (0c333d7)
- Added getAyahMeta feat: rename pageMeta to getPageMeta (2cd63ae)

### 🏡 Chore


- Naming standartization (7ce5fb0)
- Rename getAyahCountinSurah (9280eed)
- Make internal ayaIds consistent (27b4504)
- Meta Count tests (4f24f2e)
- Cleanup (13581d1)
- Update dependencies (679a362)
- Update documentation (07829bb)

### ❤️ Contributors

- HG ([@husayt](http://github.com/husayt))

## v2.5.9

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v2.5.8...v2.5.9)

## v2.5.8

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v2.5.7...v2.5.8)

## v2.5.7

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v2.5.6...v2.5.7)

## v2.5.6

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v2.5.5...v2.5.6)

## v2.5.5

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v2.5.4...v2.5.5)

## v2.5.4

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v2.5.4-0...v2.5.4)

## v2.5.4-0

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v2.5.3...v2.5.4-0)

### 🏡 Chore

- Various fixes (63e51ef)

### ❤️ Contributors

- HG ([@husayt](http://github.com/husayt))

## v2.5.3

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v2.5.3-0...v2.5.3)

## v2.5.3-0

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v2.5.2...v2.5.3-0)

## v2.5.2

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v2.5.2-3...v2.5.2)

## v2.5.2-3

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v2.5.2-2...v2.5.2-3)

## v2.5.2-2

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v2.5.2-1...v2.5.2-2)

## v2.5.2-0

[compare changes](https://git+https@github.com/quran-center/quran-meta/compare/v2.4.15...v2.5.2-0)

### 🚀 Enhancements

- Switch from jest to vitest (1b37cff)
- Full rewrite of the project with latest eslint and typescript
- Impove tsdoc (7ff9baa)
- Better eslint (53fa239)
- Standard buid process using unbuild (2ab032e)
- Full cleanup and addition of changelogen (457e5c9)

### 🩹 Fixes

- Add full unit test coverage (42d17c0)

### 🏡 Chore

- Update deps (fc4baee)

### ❤️ Contributors

- HG ([@husayt](http://github.com/husayt))


### [2.4.15](https://github.com/quran-center/quran-meta/compare/v2.4.13...v2.4.15) (2022-11-13)

### [2.4.13](https://github.com/quran-center/quran-meta/compare/v2.4.12...v2.4.13) (2022-11-13)

### [2.4.12](https://github.com/quran-center/quran-meta/compare/v2.4.11...v2.4.12) (2022-02-09)

### [2.4.11](https://github.com/quran-center/quran-meta/compare/v2.4.9...v2.4.11) (2022-02-09)

### [2.4.9](https://github.com/quran-center/quran-meta/compare/v2.4.8...v2.4.9) (2022-02-09)

### [2.4.8](https://github.com/quran-center/quran-meta/compare/v2.4.6...v2.4.8) (2022-02-09)

### [2.4.6](https://github.com/quran-center/quran-meta/compare/v2.4.5...v2.4.6) (2022-02-09)

### [2.4.5](https://github.com/quran-center/quran-meta/compare/v2.4.3...v2.4.5) (2022-02-09)

### [2.4.3](https://github.com/quran-center/quran-meta/compare/v2.4.2...v2.4.3) (2021-05-26)

### [2.4.2](https://github.com/quran-center/quran-meta/compare/v2.3.2...v2.4.2) (2021-05-21)

### [2.3.2](https://github.com/quran-center/quran-meta/compare/v2.2.4...v2.3.2) (2021-05-21)

### [2.2.4](https://github.com/quran-center/quran-meta/compare/v2.2.3...v2.2.4) (2021-05-20)

### [2.2.3](https://github.com/quran-center/quran-meta/compare/v2.2.2...v2.2.3) (2021-05-19)

### [2.2.2](https://github.com/quran-center/quran-meta/compare/v2.1.3...v2.2.2) (2021-05-11)

### [2.1.3](https://github.com/quran-center/quran-meta/compare/v2.1.2...v2.1.3) (2020-12-24)

### [2.1.2](https://github.com/quran-center/quran-meta/compare/v2.0.1...v2.1.2) (2020-10-23)

### [2.0.1](https://github.com/quran-center/quran-meta/compare/v1.1.3...v2.0.1) (2020-10-22)

### [1.1.3](https://github.com/quran-center/quran-meta/compare/v1.1.1...v1.1.3) (2020-10-21)

### [1.1.1](https://github.com/quran-center/quran-meta/compare/v1.0.13...v1.1.1) (2020-10-21)

### [1.0.13](https://github.com/quran-center/quran-meta/compare/v1.0.12...v1.0.13) (2020-04-23)

### [1.0.12](https://github.com/quran-center/quran-meta/compare/v1.0.11...v1.0.12) (2020-04-20)

### [1.0.11](https://github.com/quran-center/quran-meta/compare/v1.0.9...v1.0.11) (2020-04-17)

### [1.0.9](https://github.com/quran-center/quran-meta/compare/v1.0.8...v1.0.9) (2020-04-17)

### [1.0.8](https://github.com/quran-center/quran-meta/compare/v1.0.7...v1.0.8) (2020-04-17)

### [1.0.7](https://github.com/quran-center/quran-meta/compare/v1.0.6...v1.0.7) (2020-04-17)

### [1.0.6](https://github.com/quran-center/quran-meta/compare/v1.0.5...v1.0.6) (2020-04-16)

### [1.0.5](https://github.com/quran-center/quran-meta/compare/v1.0.4...v1.0.5) (2020-04-16)

### [1.0.4](https://github.com/quran-center/quran-meta/compare/v1.0.3...v1.0.4) (2020-04-16)

### [1.0.3](https://github.com/quran-center/quran-meta/compare/v1.0.2...v1.0.3) (2020-04-14)

### [1.0.2](https://github.com/quran-center/quran-meta/compare/v1.0.1...v1.0.2) (2020-04-12)

### 1.0.1 (2020-04-12)
