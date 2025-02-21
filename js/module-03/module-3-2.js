/**
 * ? Ітерація по масиву - Додавння значень індексів у масиві.
 * Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.
 * Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.
 */

function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
console.log(calculateTotalPrice([164, 48, 291])); // 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
