type GrowToSize<T, N extends number, A extends T[]>
  = A["length"] extends N ? A : GrowToSize<T, N, [...A, T]>

export type FixedArray<T, N extends number> = GrowToSize<T, N, []>

export type ArrayOfSameLength<T extends unknown[], U> = {
  [K in keyof T]: U;
}

// Utility type for numeric range
export type LessThan<TNumber extends number, TArray extends unknown[] = []> = TNumber extends TArray["length"] ? TArray[number] : LessThan<TNumber, [...TArray, TArray["length"]]>
