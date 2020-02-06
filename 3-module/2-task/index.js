/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(string) {
  const arr = string.split(",")
    .join(' ')
    .split(' ')
    .map(item => +item)
    .filter(item => !isNaN(item))
    .sort((a, b) => a - b)
  return {
    min: arr[0],
    max: arr[arr.length - 1]
  }
}

