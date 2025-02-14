// Оголоси змінну fruits. Надай змінній fruits наступне значення: масив фруктів - рядків "apple", "plum", "pear" і "orange".

// const fruits = ["apple", "plum", "pear", "orange"];

// ------------------------------------------------------

/**
Оголоси три змінні і надай кожній змінній відповідне значення, використовуючи нотацію квадратних дужок.
Ім'я змінної	Значення змінної
firstElement	перший елемент масиву
secondElement	другий елемент масиву
lastElement	останній елемент масиву
*/

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// ------------------------------------------------------

/**
 * Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".
 */

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

// ------------------------------------------------------

// Function declaration

// function freetUser(firstName, lastName) {
//   console.log(`${firstName} ${lastName}`);
// }

// freetUser("Andrii", "Yakymiv");

// Function expression

// Псевдомасив arguments

//! ---------- .length ----------

//Функція getOrderQuantity(order) приймає один параметр order - масив рядків,
//які описують продукти в замовленні клієнта. Доповни код функції таким чином,
//щоб вона повертала число, що дорівнює кількості елементів масиву.

// function getOrderQuantity(order) {
//   return order.length;
// }

// console.log(getOrderQuantity(['apple', 'peach', 'pear', 'banana']));

//! ---------- length -1 ----------
/** Функція getLastElementMeta(array) приймає один параметр array -
 * масив довільних значень. Доповни код функції таким чином,
 * щоб вона повертала новий масив з двох елементів:
 * перший елемент - це індекс останнього елементу у масиві array
 * другий елемент - це значення останнього елементу у масиві array
 */

// function getLastElementMeta(array) {
//   const lastElemIndex = array.length - 1;
//   const lastElement = array[lastElemIndex];
//   return [lastElemIndex, lastElement];
// }

// console.log(getLastElementMeta(['apple', 'peach', 'pear', 'banana']));
// console.log(getLastElementMeta(['apple', 'peach', 'pear']));
// console.log(getLastElementMeta(['apple', 'peach']));
// console.log(getLastElementMeta(['apple']));

//! ---------- length -1 ----------
