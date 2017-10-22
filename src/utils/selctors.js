export function getFilteredMappingValues(values, type) {
  if (type) {
    return values.filter(item => item.type === type).map(item => Object.assign({}, item, {value: item.value + " (" + item.id + ")"}));
  }
  return values;
}