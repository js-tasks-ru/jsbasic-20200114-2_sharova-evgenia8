/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= m;
  }
  return result;
}
let m = parseInt(prompt('Введите m', ''));
let n = parseInt(prompt('Введите n', ''));
alert(pow(m, n));
