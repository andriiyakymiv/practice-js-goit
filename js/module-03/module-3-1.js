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

//! ---------- First element and length -1 ----------
/** Функція getExtremeElements(array) приймає один параметр array
 * масив елементів довільної довжини. Доповни код функції таким чином,
 * щоб вона повертала масив з двох елементів - першого і останнього
 * елементів параметра array.
 */

// function getExtremeElements(array) {
//   const firstElem = array[0];
//   const lastElemIndex = array.length - 1;
//   const lastElement = array[lastElemIndex];
//   return [firstElem, lastElement];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5])); //повертає [1, 5]
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus'])); //повертає ["Earth", "Venus"]
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana'])); //повертає ["apple", "banana"]

//! ---------- .join ----------
/**
 * Функція getLength(array) очікує один параметр array - масив довільних значень.
 * Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників,
 * і повертала кількість символів в отриманому рядку.
 */

function getLength(array) {
  const union = array.join('');
  return union.length;
}

console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train'])); //повертає 22
console.log(getLength(['M', 'a', 'n', 'g', 'o'])); //повертає 5
// console.log(getLength(['top', 'picks', 'for', 'you'])); //повертає 14
