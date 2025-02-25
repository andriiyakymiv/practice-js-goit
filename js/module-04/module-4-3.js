/**
 * ? Масив об'єктів - Array of objects
 * Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і має
 * властивості hex і rgb з відповідними для цього формату і кольору значеннями.
 * Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors
 * значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
 */

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
// }

// const rgbColors = [];

// for (const rgbColor of colors) {
//   rgbColors.push(rgbColor.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

/**
 * ? Пошук об'єкта за значенням властивості - Searching for an object by property value
 * Функція getProductPrice(productName) приймає один параметр productName - назва продукту.
 * Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
 * Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і
 * повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
 */

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (const element of products) {
//     if (element.name === productName) {
//       return element.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));
