export function enumToSelect<TEnum>(enumObj: TEnum, obj: Record<keyof TEnum, string>) {
  return (Object.keys(enumObj) as Array<keyof TEnum>)
    .filter(p => typeof enumObj[p] === "number" || typeof enumObj[p] === "string")
    .map(p => ({
      viewValue: obj[p],
      value: enumObj[p]
    }))
}

export function enumToArray<TEnum>(enumObj: TEnum) {
  return (Object.keys(enumObj) as Array<keyof TEnum>)
}
export function enumToValue<TEnum>(enumObj: TEnum, obj: Record<keyof TEnum, string>) {
  return (Object.keys(enumObj) as Array<keyof TEnum>)
    .filter(p => typeof enumObj[p] === "number" || typeof enumObj[p] === "string")
    .map(p => (obj[p]))
}
export function enumToBoolObject<TEnum>(enumObj: TEnum, bool: Boolean = false): Record<keyof TEnum, boolean> {
  // const obj: any = {};
  // const props = 
  const obj = ((o) => {
    return (Object.keys(enumObj) as Array<keyof TEnum>)
      .forEach((value) => {
        o[value] = bool
      })
    // return obj
  }).call({})

  return obj
}