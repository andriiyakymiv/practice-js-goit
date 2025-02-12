// function getPrice(subscription) {
//   let price = 0;
//   if (subscription === "pro") {
// 	price = 100;
//   }
//   return price;
// }
// console.log(getPrice("free")); // 0
// console.log(getPrice("pro")); // 100

/**
*? if
** Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult",
** якщо значення параметра age більше або дорівнює 18. Використай у тілі функції інструкцію
** if для перевірки значення age. 
 */

// function checkAge(age) {
//     if (age >= 18) {
//        return ('You are an adult');
//     }
// }

// console.log(checkAge(20));
// console.log(checkAge(17));
// console.log(checkAge(10));
// console.log(checkAge(30));

/**
*? if ... else
** Створимо функцію яка отримує бал студента, та повертає рішення про результат.
*/

//  function checkGrade(grade) {
//   if (grade >= 70) {
//     return "Satisfactory";
//   } else {
//     return "Unsatisfactory";
//   }
// }

// console.log(checkGrade(40)); // Unsatisfactory
// console.log(checkGrade(75)); // Satisfactory

/**
*? Завдання
** Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. 
** Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
** available - доступна кількість товарів на складі. ordered - кількість одиниць товару в замовленні
** Використовуючи розгалуження, доповни код функції таким чином, щоб:
** Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі, 
** функція повертає рядок "Not enough goods in stock!"
** В іншому випадку функція повертає рядок "Order is processed, our manager will contact you"
*/

// function checkStorage(available, ordered) {
//     if (available < ordered) {
//         return 'Not enough goods in stock!';
//     } else {
//         return 'Order is processed, our manager will contact you';
//     }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
/**
*? if ... else if .. else
** У цьому прикладі спочатку перевіряється умова grade >= 90.
*/

// const grade = 99;

// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
/** 
*? Завдання 
** Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. 
** Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

** available - доступна кількість товарів на складі
** ordered - кількість одиниць товару в замовленні
** Використовуючи розгалуження, доповни код функції таким чином, щоб:

** Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, 
** функція повертає рядок "There are no products in the order!".
** Якщо товарів у замовленні більше, ніж їх доступно на складі, 
** то функція повертає рядок "Your order is too large, there are not enough items in stock!".
** В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".
*/

// function checkStorage(available, order) {
//     if (order === 0) {
//         return 'There are no products in the order!';
//     } else if (order > available) {
//         return 'Your order is too large, there are not enough items in stock!';
//     } else {
//         return 'The order is accepted, our manager will contact you';
//     }
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// --------------------------------------------------------------------------------------------

/**
*--------------------------------------------------------------------------------------------
*? Тернарний оператор
*--------------------------------------------------------------------------------------------
*/

// --------------------------------------------------------------------------------------------
/** 
** Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі 
** збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням про результат.
** Використовуючи тернарний оператор, доповни функцію таким чином, щоб:
** Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
** В іншому випадку, функція повертала рядок "Access denied, wrong password!"
 * */

// function checkPassword(password) {
//     const correctPassword = password === "jqueryismyjam" ? 'Access granted' : 'Access denied, wrong password!';
//     return correctPassword
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("123"));
// --------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
/**
 *? Приклад використання оператора switch:
 */

//  const fruit = 'apple';

// switch (fruit) {
//   case 'apple':
//     console.log('Apple selected');
//     break;
//   case 'banana':
//     console.log('Banana selected');
//     break;
//   case 'orange':
//     console.log('Orange selected');
//     break;
//   default:
//     console.log('The fruit is unknown');
// }
// --------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
/** Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), 
* перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, 
* або повідомлення про неправильний тип передплати.
* Якщо значення параметра type — це рядок:
"starter" — ціна передплати 0 кредитів.
"professional" — ціна передплати 20 кредитів.
"organization" — ціна передплати 50 кредитів.
Для будь-якого іншого значення параметра type повертається рядок "Invalid subscription type!".
Використай оператор switch для розв'язання цієї задачі!
*/

// 
// --------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------
