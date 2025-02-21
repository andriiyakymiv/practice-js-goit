/**
 * ? Ітерація по масиву - Додавння значень індексів у масиві.
 * Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.
 * Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.
 */

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

/**
 * ? Ітерація по масиву - Парні числа.
 * Функція getEvenNumbers(start, end) має два параметри start та end,
 * які є цілими числами. Доповни код функції так, щоб вона повертала
 * масив усіх парних чисел від start до end. Якщо жодного парного числа немає,
 * то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі
 * (10 % 2 === 0). Використовуй цикл for.
 */

// function getEvenNumbers(start, end) {
//   let evenNumbers = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }

// console.log(getEvenNumbers(2, 5)); // [2, 4]
// console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // [8]
// console.log(getEvenNumbers(7, 7)); // []

/**
 * ? Метод — includes()
 * Функція checkStorage(storage, item) приймає два параметри:
 * storage - масив рядків, що описує доступні товари на складі
 * item - рядок з назвою товара, наявність якого потрібно перевірити
 * Доповни код функції таким чином, щоб вона перевіряла, чи присутній
 * такий товар в масиві storage і повертала:
 * рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
 * рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
 * Зроби так, щоб пошук за ім'ям товару був незалежний від регістру,
 * тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].
 */

// function checkStorage(storage, item) {
//   const lowerItem = item.toLowerCase();
//   console.log(lowerItem);

//   if (storage.includes(lowerItem)) {
//     return `${lowerItem} is available to order!`;
//   } else {
//     return `Sorry! We are out of stock!`;
//   }
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'plum')); // "plum is available to order!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange')); // "Sorry! We are out of stock!"
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr')); // "pear is available to order!"

/**
 * ? Спільні елементи
 * Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи.
 * Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
 * Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5,
 * оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
 * Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2)
 * довільної довжини в якості параметрів.
 * Доповни код функції:
 * Створи порожній масив для зберігання нового масиву.
 * Використай цикл for для ітерації кожного елемента у array1.
 * У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
 * Якщо він існує, то додай елемент до нового масиву.
 * Поверни наповнений масив спільних елементів як результат роботи функції.
 */

// function getCommonElements(array1, array2) {
//   let commonElements = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       commonElements.push(array1[i]);
//     }
//   }
//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([1, 2, 3], [2, 3, 1, 19])); // [1, 2]

/**
 * ? Цикл for...of
 * Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order.
 * Використай цикл for...of для перебору масиву.
 */

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const element of order) {
//     total += element;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([12, 85, 50, 37, 4]));
// console.log(calculateTotalPrice([12, 56, 45, 76, 85, 37, 4]));
// console.log(calculateTotalPrice([12, 85, 37, 4]));
