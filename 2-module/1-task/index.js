/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let salaryAmount = 0;
  for (key in salaries) {
    if (typeof salaries[key] == 'number') {
      salaryAmount += salaries[key];
    }
  } return salaryAmount;
}
