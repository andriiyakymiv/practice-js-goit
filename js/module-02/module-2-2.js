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

// function isNumberInRange(start, end, number) {
//     return number >= start && number <= end;
        
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 74));

// ------------------------------------------------------
// Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту.
// Перевірка відбувається за типом передплати.Використовуючи оператор "АБО", доповни код 
// функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip",
// то функція повертала true і користувач отримував доступ.
// В іншому випадку повертала false.

// function checkAccess(subType) {
//     return subType === 'pro' || subType === 'vip'
// }

// console.log(checkAccess("pro"));
// console.log(checkAccess("starter"));
// console.log(checkAccess("vip"));
// console.log(checkAccess("free"));

// ------------------------------------------------------

// const isBlocked = false;
// const canChat = !isBlocked; // !false -> true

// if(canChat) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }

// const isBlocked = true;
// const canChat = !isBlocked; // !true -> false

// if(canChat) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }

// ------------------------------------------------------

// function canUserChat(isOnline, isBlocked) {
//   const canChat = isOnline && !isBlocked;

//   if (canChat) {
//     return "Can type in chat!";
//   } else {
//     return "Blocked from typing in chat!";
//   }
// }

// console.log(canUserChat(true, false));  // "Can type in chat!"
// console.log(canUserChat(true, true));   // "Blocked from typing in chat!"
// console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
// console.log(canUserChat(false, true));  // "Blocked from typing in chat!"

// ------------------------------------------------------

// Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна. 
// У параметрі isVisible вона очікує буль true або false.Доповни код функції так,
// щоб вона повертала протилежне значення цього параметра.

function toggleModalVisibility(isVisible) {
    return !isVisible;
}


console.log(toggleModalVisibility(true));
console.log(toggleModalVisibility(false));





