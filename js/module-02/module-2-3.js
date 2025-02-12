// Функція getSubstring(string, length) приймає рядок і повертає новий підрядок(його часткову копію).
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// string - оригінальний рядок
// length - довжина нового підрядка
// Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку
// string і має довжину length.

// function getSubstring(string, length) {
//     return string.slice(0, length);
// }

// console.log(getSubstring("Hello world", 3))
// console.log(getSubstring("Hello world", 4))
// console.log(getSubstring("Hello world", 5))

// ------------------------------------------------------------------------------------

// Функція normalizeInput(input, to) оголошує два параметри:
// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:
// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі.

// function normalizeInput(input, to) {
//     if (to === 'upper') {
//         return input.toUpperCase();
//     } else {
//         return input.toLowerCase();
//     }
// }

// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("Big SALE", "upper"));
// console.log(normalizeInput("Big SALE", "lower"));

// ------------------------------------------------------------------------------------

// const message = "Please buy our stuff!";
// const hasSpam = message.includes("buy");

// if (hasSpam) {
//   console.log("Warning: This message contains forbidden words.");
// } else {
//   console.log("You can safely open this message.");
// }

// У цьому прикладі ми перевіряємо, чи містить змінна message підрядок "buy".

// ------------------------------------------------------------------------------------

/** Функція checkForName(fullName, firstName) приймає два параметри та повертає буль 
true або false - результат перевірки входження підрядка firstName у рядок fullName.
fullName - рядок, що містить повне ім'я 
firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я.
Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження 
імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр 
символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою 
входження не забудь прирівняти їх до однакового регістру. */

// function checkForName(fullName, firstName) {
//     const lowerFullName = fullName.toLowerCase();
//     const lowerFirstName = firstName.toLowerCase();

//     return lowerFullName.includes(lowerFirstName);
// }

// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Jason Neis", "Jacob"));

// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }

// console.log(checkForName("Jason Neis", "Jason")); // true
// console.log(checkForName("Jason Neis", "jAsOn")); // true
// console.log(checkForName("Jason Neis", "Jacob")); // false
// console.log(checkForName("Caty Stars", "Caty")); // true
// console.log(checkForName("Caty Stars", "cAtY")); // true
// console.log(checkForName("Caty Stars", "Andromeda")); // false

// ------------------------------------------------------------------------------------