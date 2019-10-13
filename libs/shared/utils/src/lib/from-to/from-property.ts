export function propToReadable(obj: Object, propTo: Object) {
  return Object.keys((o) => {
    const ob = {}
    ob[propTo[o]] = o[o]
    return ob
  })
}