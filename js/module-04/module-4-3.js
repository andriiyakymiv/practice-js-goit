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

/**
 * ? Колекція значень властивості - Collection of property values
 * Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
 * Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
 * Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
 */

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   let getValues = [];

//   for (const product of products) {
//     if (product[propName] !== undefined) {
//       getValues.push(product[propName]);
//     }
//   }
//   return getValues;
// }

// console.log(getAllPropValues('name')); // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues('quantity')); // [4, 3, 7, 9]
// console.log(getAllPropValues('price')); // [1300, 2700, 400, 1200]

/**
 * ? Задача "Вартість товару" - Task Cost of goods
 * Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару.
 * Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.
 * Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.
 * Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!"
 * де <productName> — це ім'я товару.
 */

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   let total = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       return (total = product.price * product.quantity);
//     }
//   }
//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Scanner'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice('Blaster'));
