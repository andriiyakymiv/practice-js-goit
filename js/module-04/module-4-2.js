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

/**
 * ? Метод Object.keys()
 * Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys()
 * для отримання масиву властивостей. Функція має повернути кількість властивостей в об'єкті object.
 */

// function countProps(object) {
//   let propCount = 0;

//   const keys = Object.keys(object);

//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

/**
 * ? Метод Object.values()
 * Запиши у змінну keys масив ключів властивостей об'єкта apartment, а у змінну values - масив їх значень.
 * Використовуй методи Object.keys() і Object.values().
 */

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

/**
 * ? Метод Object.values() - Витрати на зарплату
 * Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта
 * salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.
 * Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.
 * Поради:
 * Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
 * Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
 * Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
 * Поверни totalSalary як результат
 */

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const values = Object.values(salaries);

//   console.log(values);

//   for (const value of values) {
//     totalSalary += value;
//   }

//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400
// console.log(countTotalSalary({})); // 0
