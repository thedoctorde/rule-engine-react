export function getFilteredMappingValues(values, type) {
  if (type) {
    return values.filter(item => item.type === type);
  }
  return values;
}