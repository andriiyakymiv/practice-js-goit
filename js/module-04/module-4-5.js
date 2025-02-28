/**
 * ? Залишкові параметри - Residual parameters
 * Використовуючи синтаксис залишкових параметрів, доповни код функції add() так,
 * щоб вона приймала будь-яку кількість аргументів у параметр args і повертала їхню суму.
 */

// function add(...args) {
//   let total = 0;
//   for (const num of args) {
//     total += num;
//   }
//   return total;
// }

// console.log(add(1, 2, 3));

/**
 * ? Збір частини аргументів - Gathering some of the arguments - ...rest
 * Функція addOverNum() приймає довільну кількість аргументів чисел.
 * Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число.
 * Це число завжди буде передано першим аргументом.
 * Для вирішення цього завдання тобі потрібно зробити наступне:
 * Перший параметр value повинен представляти задане число, а решта аргументів повинні бути зібрані за допомогою синтаксису (...args)
 * Усередині функції ініціалізуй змінну для зберігання загальної суми
 * Потім пройдись по кожному аргументу за допомогою циклу
 * Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його до загальної суми
 * На завершення поверни загальну суму
 */

// function addOverNum(first, ...args) {
//   let sum = 0;
//   for (const num of args) {
//     if (first < num) {
//       sum += num;
//     }
//   }
//   return sum;
// }

// console.log(addOverNum(50, 15, 27)); // 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 71

/**
 * ? Входження параметрів - Parameter entry - ...spread
 * Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.
 * Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:
 * Властивість best має містити найбільше число з масиву scores
 * Властивість worst має містити найменше число з масиву scores.
 * Використовуй оператор (...spread) і методи Math.max() і Math.min().
 */

// function getExtremeScores(scores) {
//   return {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

/**
 * ? Створення масиву - Creating an array
 * У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп.
 * Використовуючи розпилення, доповни код таким чином, щоб:
 * У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
 * У змінній bestScore був найвищий загальний бал.
 * У змінній worstScore був найнижчий загальний бал.
 */

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log('allScores:', allScores);
// console.log('bestScore:', bestScore);
// console.log('worstScore:', worstScore);

/**
 * ? Створення об'єкта -
 */
