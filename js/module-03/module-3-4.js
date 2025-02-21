/**
 * ? Псевдомасив arguments
 * Функція createReversedArray() може приймати довільну кількість аргументів.
 * Доповни код функції так, щоб вона повертала масив усіх аргументів, але в
 * масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3),
 * функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(),
 * який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.
 */

// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4)); // [4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291)); // [291, 48, 164]

/**
 * ? Параметри за замовчуванням
 * Функція calculateTax(amount, taxRate) оголошує два параметри:
 * amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
 * taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
 * Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.
 */
// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }

// console.log(calculateTax(100, 0.1)); // 10
// console.log(calculateTax(200, 0.1)); // 20
// console.log(calculateTax(100, 0.2)); // 20
// console.log(calculateTax(200, 0.2)); // 40
// console.log(calculateTax(200)); // 40
// console.log(calculateTax(400)); // 80
