
export default function toArray(obj) {
  if (Array.isArray(obj)) {
    return obj
  }
  return Object.keys(obj).map(function (key) {
    return obj[key];
  })
}

export function numberize(newValue, oldValue) {
  let x =  Number(newValue);
  if ( isNaN(x))
    return oldValue;
  return x;

}


