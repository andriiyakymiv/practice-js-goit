// ------------------------------------------------------
// Якщо б ми створювали функцію для перевірки типу екрану, 
// то вона виглядала би наступним чином:

// function getScreenType(screenWidth) {
//   const sm = 320;
//   const md = 768;
//   const lg = 1200;

//   if (screenWidth <= sm) {
//     return "Mobile screen";
//   } else if (screenWidth > sm && screenWidth <= md) {
//     return "Tablet screen";
//   } else if (screenWidth > md && screenWidth <= lg) {
//     return "Desktop screen";
//   } else {
//     return "Godzilla screen";
//   }
// }

// console.log(getScreenType(700));  // "Tablet screen"
// console.log(getScreenType(1200)); // "Desktop screen"
// console.log(getScreenType(1500)); // "Godzilla screen"
// console.log(getScreenType(320));  // "Mobile screen"

// ------------------------------------------------------
// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. 
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку

// Використовуючи оператор &&, доповни функцію isNumberInRange таким чином,
// щоб вона повертала результат входження number у числовий проміжок від 
// start до end включно.Тобто число повинно бути одночасно і більшим або 
// дорівнювати start, і меншим або дорівнювати end.Результатом виклику 
// функції має бути буль true або false.

function isNumberInRange(start, end, number) {
    return number >= start && number <= end;
        
}

console.log(isNumberInRange(10, 30, 17));
console.log(isNumberInRange(10, 30, 5));
console.log(isNumberInRange(20, 50, 24));
console.log(isNumberInRange(20, 50, 74));