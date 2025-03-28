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

// ---------------------------------

/**
Функція checkFileExtension(fileName, ext) приймає два параметри:
fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
Доповни код функції так, щоб: Якщо ім'я файлу fileName закінчується розширенням,
зазначеним у параметрі ext, то функція повертала рядок "File extension matches"
В іншому разі, функція повертала рядок "File extension does not match"
 */

// function checkFileExtension(fileName, ext) {
//     return fileName.endsWith(ext) ? 'File extension matches' : 'File extension does not match';
// }

// console.log(checkFileExtension("styles.css", ".css"));
// console.log(checkFileExtension("styles.css", ".js"));
// console.log(checkFileExtension("app.js", ".js"));
// console.log(checkFileExtension("app.js", ".html"));


/**
Функція getFileName(file) приймає один параметр

file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
В іншому разі функція повертала підрядок з іменем файлу, але без розширення
 */

// function getFileName(file) {
//     const punkt = file.indexOf('.');
//     console.log(punkt);
//     if (punkt === -1) {
//         return file;
//     } else {
//         return file.slice(0, punkt);
//     }
// }

// console.log(getFileName("styles.css"));
// console.log(getFileName("app"));
// console.log(getFileName("index.js"));
// console.log(getFileName("index.css"));

// ----------------------------------------------------

/**
Функція createFileName(name, ext) приймає два параметри:

name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. 
Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо

Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, 
щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у 
параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити 
зайвих пробілів на початку або наприкінці.
 */

// function createFileName(name, ext) {
//     return `${ name.trim() }.${ ext }`;
// }

// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("report ", "csv"));
// console.log(createFileName(" presentation", "xml"));

// ----------------------------------------------------
