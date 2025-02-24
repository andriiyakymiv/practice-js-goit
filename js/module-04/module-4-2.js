/**
 * ? Перебір об'єкта - Object search
 * Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі,
 * а в масив values всі значення його властивостей.
 */

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

/**
 * ? Метод Object.keys()
 * Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
 * Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.
 */

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);
// console.log(keys);
