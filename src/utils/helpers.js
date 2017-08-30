export default function toArray(obj) {
  if (Array.isArray(obj)) {
    return obj
  }
  return Object.keys(obj).map(function (key) {
    return obj[key];
  })
}

export function numberize(newValue, oldValue) {
  let x = Number(newValue);
  if (isNaN(x))
    if (oldValue) return oldValue;
    else return 0;
  return x;
}

export function typize(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  if (value === "") return value;
  let num = Number(value);
  if (!isNaN(num)) return num;
  return value;
}


