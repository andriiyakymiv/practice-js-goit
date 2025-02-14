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

// ------------------------------------------------------

//*Функція getOrderQuantity(order) приймає один параметр order - масив рядків,
//* які описують продукти в замовленні клієнта. Доповни код функції таким чином,
//* щоб вона повертала число, що дорівнює кількості елементів масиву.

function getOrderQuantity(order) {
  const orderLength = order.length;
  return orderLength;
}

getOrderQuantity(['apple', 'peach', 'pear', 'banana']);
