# Multiple Quranic Readings Support

## Overview

The Quran has multiple accepted readings (Qira'at), each with potential variations in:
- Number of ayahs (verses)
- Page numbering
- Juz divisions
- Other structural elements

This library now supports switching between different readings while maintaining full backward compatibility.

## Supported Readings

Currently, the library provides metadata for the following readings:

- **Hafs** (default) - The most widely used reading, based on the Medina Mushaf
- **Warsh** - Popular in North and West Africa
- **Qaloun** - Used in some regions
- **Douri** - Another recognized reading
- **Sousi** - Another recognized reading
- **Shuba** - Another recognized reading

> **Note**: Full data implementation for non-Hafs readings is planned for future releases. Currently, only Hafs has complete page/juz/ruku mappings.

## Key Differences

### Ayah Counts

Different readings may have different total ayah counts:

| Reading | Total Ayahs | Difference from Hafs |
|---------|-------------|---------------------|
| Hafs    | 6,236       | -                   |
| Warsh   | 6,214       | -22                 |
| Qaloun  | 6,214       | -22                 |

These differences arise from variations in verse divisions, not in the text content itself.

## API Reference

### Types

```typescript
type Reading = "hafs" | "warsh" | "qaloun" | "douri" | "sousi" | "shuba"

interface ReadingMeta {
  numAyahs: number
  numSurahs: number
  numPages: number
  numJuzs: number
  numHizbs: number
  numRubAlHizbs: number
  numRubsInJuz: number
  numSajdas: number
  numRukus: number
  numManzils: number
}
```

### Functions

#### `getCurrentReading(): Reading`

Gets the current active reading.

```typescript
import { getCurrentReading } from "quran-meta"

const reading = getCurrentReading() // "hafs" (default)
```

#### `setCurrentReading(reading: Reading): void`

Sets the current active reading globally. All subsequent API calls will use this reading.

```typescript
import { setCurrentReading } from "quran-meta"

setCurrentReading("warsh")
// All subsequent calls now use Warsh reading
```

#### `withReading<T>(reading: Reading, fn: () => T): T`

Temporarily switches to a different reading for the duration of a function call, then restores the previous reading.

```typescript
import { withReading, getMeta } from "quran-meta"

const warshAyahCount = withReading("warsh", () => {
  return getMeta().numAyahs
})
// Reading is automatically restored after the function
```

#### `getMeta(): ReadingMeta`

Gets metadata for the current reading. Returns reading-specific values based on `getCurrentReading()`.

```typescript
import { getMeta, setCurrentReading } from "quran-meta"

setCurrentReading("hafs")
console.log(getMeta().numAyahs) // 6236

setCurrentReading("warsh")
console.log(getMeta().numAyahs) // 6214
```

#### `getReadingMeta(reading: Reading): ReadingMeta`

Gets metadata for a specific reading without changing the current reading.

```typescript
import { getReadingMeta } from "quran-meta"

const hafsMeta = getReadingMeta("hafs")
const warshMeta = getReadingMeta("warsh")

console.log(`Hafs: ${hafsMeta.numAyahs} ayahs`)
console.log(`Warsh: ${warshMeta.numAyahs} ayahs`)
```

### Constants

#### `DEFAULT_READING: Reading`

The default reading used by the library (currently "hafs").

```typescript
import { DEFAULT_READING } from "quran-meta"

console.log(DEFAULT_READING) // "hafs"
```

#### `hafsReadingMeta: ReadingMeta`

Pre-exported metadata for Hafs reading.

#### `warshReadingMeta: ReadingMeta`

Pre-exported metadata for Warsh reading.

## Usage Examples

### Basic Usage

```typescript
import { getCurrentReading, setCurrentReading, getMeta } from "quran-meta"

// Check default reading
console.log(getCurrentReading()) // "hafs"
console.log(getMeta().numAyahs)  // 6236

// Switch to Warsh
setCurrentReading("warsh")
console.log(getMeta().numAyahs)  // 6214
```

### Comparing Readings

```typescript
import { getReadingMeta } from "quran-meta"

const readings = ["hafs", "warsh", "qaloun"]

readings.forEach(reading => {
  const meta = getReadingMeta(reading)
  console.log(`${reading}: ${meta.numAyahs} ayahs`)
})
```

### Temporary Context Switching

```typescript
import { setCurrentReading, withReading, getMeta } from "quran-meta"

setCurrentReading("hafs")
console.log(getMeta().numAyahs) // 6236

// Temporarily use Warsh
const warshData = withReading("warsh", () => {
  console.log(getMeta().numAyahs) // 6214
  return { ayahs: getMeta().numAyahs }
})

console.log(getMeta().numAyahs) // 6236 (restored)
```

### Application with User Preferences

```typescript
import { setCurrentReading, getMeta } from "quran-meta"

// Set reading based on user preference
function initializeApp(userPreferences) {
  const reading = userPreferences.reading || "hafs"
  setCurrentReading(reading)
  
  console.log(`Using ${reading} reading`)
  console.log(`Total ayahs: ${getMeta().numAyahs}`)
}

initializeApp({ reading: "warsh" })
```

## Backward Compatibility

The library maintains **full backward compatibility**:

- The `meta` constant still exists and always returns Hafs values
- All existing functions work without modification
- Default behavior is unchanged (Hafs reading)
- No breaking changes to existing APIs

```typescript
// Old code still works
import { meta } from "quran-meta"
console.log(meta.numAyahs) // 6236 (always Hafs)

// New reading-aware code
import { getMeta, setCurrentReading } from "quran-meta"
setCurrentReading("warsh")
console.log(getMeta().numAyahs) // 6214 (reading-aware)
```

## Migration Guide

### If you want to keep existing behavior:

No changes needed! Your code will continue to work exactly as before.

### If you want to support multiple readings:

1. Replace `meta` with `getMeta()` for reading-aware metadata
2. Add reading selection UI to your application
3. Use `setCurrentReading()` to switch based on user preference

```typescript
// Before
import { meta } from "quran-meta"
console.log(meta.numAyahs)

// After (reading-aware)
import { getMeta } from "quran-meta"
console.log(getMeta().numAyahs)
```

## Future Enhancements

The following enhancements are planned for future releases:

- [ ] Complete page/juz/ruku mappings for all readings
- [ ] Reading-specific surah lists with different ayah counts
- [ ] Reading-specific page lists
- [ ] Reading-specific juz boundaries
- [ ] Validation adjustments per reading
- [ ] Reading-specific examples and data files

## Notes

1. **Ayah Numbering**: Different readings may split or combine verses differently, leading to different total counts.

2. **Page Numbers**: Page numbering varies significantly between different Mushafs. The library will support multiple page numbering systems in future updates.

3. **Text Content**: This library deals only with metadata. The actual Quranic text is not included.

4. **Default Behavior**: The default reading (Hafs) was chosen because it's the most widely used reading globally.

## See Also

- [Main README](../README.md)
- [API Documentation](https://quran-center.github.io/quran-meta/docs/)
- [Examples](../examples/)

## References

For more information about Quranic readings:
- [Wikipedia: Qira'at](https://en.wikipedia.org/wiki/Qira%27at)
- [Quran.com](https://quran.com)
- [King Fahd Complex for Printing the Holy Quran](https://qurancomplex.gov.sa/)
