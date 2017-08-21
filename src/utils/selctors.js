export function getFilteredMappingValues(values, type) {
  if (type) {
    let arr = values.filter(item => item.type == type);
    return arr
  }
  return values;
}