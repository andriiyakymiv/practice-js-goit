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

function calculateTotal(number) {
    let sum = 0;

    for (let i = 0; i <= number; i++){
        sum += i;
    }
    return sum;

}

console.log(calculateTotal(1));
console.log(calculateTotal(0));
console.log(calculateTotal(7));
console.log(calculateTotal(18));

// ------------------------------------------------------------------

