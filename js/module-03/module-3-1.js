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

// function getLength(array) {
//   const union = array.join('');
//   return union.length;
// }

// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train'])); //повертає 22
// console.log(getLength(['M', 'a', 'n', 'g', 'o'])); //повертає 5
// console.log(getLength(['top', 'picks', 'for', 'you'])); //повертає 14

//! ---------- .split ----------
/**
 * Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування,
 * залежно від кількості слів і ціни за слово.
 * Оголошена функція calculateEngravingPrice(message, pricePerWord).
 * Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами
 * (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).
 * Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
 */

// function calculateEngravingPrice(message, pricePerWord) {
//   const arrayMessage = message.split(' ');
//   return arrayMessage.length * pricePerWord;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));

/**
 * ? ----------- .slice ----------
 * Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.
 * firstTwoEls - масив із перших двох елементів
 * nonExtremeEls - масив з усіх елементів, крім першого та останнього
 * lastThreeEls - масив із трьох останніх елементів
 */

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

/**
 * ? ----------- .concat ----------
 * Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив,
 * що складається з усіх елементів масивів oldClients і newClients.
 * Спочатку мають іти елементи з масива oldClients, а потім з newClients.
 */

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);

/**
 * ? ----------- .indexOf ----------
 * Функція getSlice(array, value) приймає два параметра:
 * array - масив довільних елементів
 * value - значення елемента масиву для пошуку
 * Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:
 * порожній масив, якщо в array немає елемента зі значенням value
 * підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array
 */

// function getSlice(array, value) {
//   console.log(array.indexOf(value));
//   if (array.indexOf(value) === -1) {
//     return [];
//   } else {
//     return array.slice(0, Number(array.indexOf(value)) + 1);
//   }
// }

// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly')); // ['Mango', 'Poly'];
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax')); // ["Mango", "Poly", "Ajax"]
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob')); // []

/**
 * ? ----------- .push ----------
 * Функція createArrayOfNumbers(min, max) приймає два параметра
 * min - ціле число, з якого починаються обчислення
 * max - ціле число, до якого включно триватимуть обчислення
 * Доповни код функції createArrayOfNumbers(min, max) таким чином,
 * щоб вона повертала масив усіх цілих чисел від значення min до max включно.
 */

// function createArrayOfNumbers(min, max) {
//   const array = [];
//   for (let i = min; i <= max; i += 1) {
//     array.push(i);
//   }
//   return array;
// }

// console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]
