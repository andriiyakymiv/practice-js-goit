// while (0 >= number) {
//     console.log(number);
// }

// ------------------------------------------------------------------

/**
 * Функція calculateTotal(number) приймає ціле число(параметр number). 
 * Доповни код функції так, щоб вона повертала суму всіх цілих чисел від 
 * одиниці до цього числа включно.Наприклад, якщо number дорівнює 3,
 * то сума - це 1 + 2 + 3, тобто 6.
 */

// function calculateTotal(number) {
//   let total = 0;
//   let i = 1;

//   while (i <= number) {
//     total += i;
//     i++;
//   }

//   return total;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(6));
// console.log(calculateTotal(0));

// ------------------------------------------------------------------

/**
Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for,
доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно.
Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
 */

// function calculateTotal(number) {
//     let sum = 0;

//     for (let i = 0; i <= number; i++){
//         sum += i;
//     }
//     return sum;

// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(0));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));

// ------------------------------------------------------------------

/**
Функція calculateEvenTotal(number) приймає ціле число (параметр number). 
Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел 
від одиниці до цього числа включно. Парні числа — це ті, що можна поділити 
на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у 
модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.
*/

// function calculateEvenTotal(number) {
//     let sum = 0;

//     for (let i = 2; i <= number; i +=2) {
        
//         sum += i;
//     }

//     return sum;
// }

// console.log(calculateEvenTotal(6));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));

// ------------------------------------------------------------------

/** Доповни код таким чином, щоб у змінну number записувалося перше 
число у проміжку від start до end, яке ділиться на 5 без остачі.
*/

// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// ------------------------------------------------------------------





















