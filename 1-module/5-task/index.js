/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let lengthStr = str.length;
  if (lengthStr > maxlength){
    return str.substr(0, 19) + "…";
  } else {
    return str;
  }
}
