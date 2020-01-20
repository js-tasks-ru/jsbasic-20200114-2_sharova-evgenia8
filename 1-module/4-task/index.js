/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let lowerStr = str.toLocaleLowerCase();
  return lowerStr.includes("1xbet") || lowerStr.includes("xxx");
}
