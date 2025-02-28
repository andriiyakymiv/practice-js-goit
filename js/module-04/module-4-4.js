/**
 * ? Методи об'єкта
 * До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю.
 * Програма має додавати, видаляти, шукати та оновлювати зілля.
 * Оголоси об'єкт atTheOldToad з наступними властивостями:
 * potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
 * getPotions() — метод, який повертає рядок "List of all available potions"
 * addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName
 */

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return `List of all available potions`;
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

/**
 * ? Доступ до властивостей об'єкта - Accessing object properties
 * Об'єкт atTheOldToad має наступні властивості:
 * potions — масив рядків, з назвами зілль
 * getPotions() — метод, який повертає рядок "List of all available potions"
 * Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions
 */

// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
// };

/**
 * ? Зміна за посиланням - Change by link
 * Об'єкт atTheOldToad має наступні властивості:
 * potions — масив рядків, з назвами зілль
 * getPotions() — метод, який повертає значення властивості potions
 * addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
 * Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву у властивості potions.
 */

// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };

// atTheOldToad.addPotion('Invisibility'); // ["Speed potion", "Stone skin", "Invisibility"]

// console.log(atTheOldToad);

/**
 * ? Масив об'єктів - Array of objects
 * Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною.
 * Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.
 * Об'єкт atTheOldToad має наступні властивості:
 * potions — масив рядків, з назвами зілль
 * getPotions() — метод, який повертає значення властивості potions
 * addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
 * Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.
 */

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalCost = 0;

//     for (const potion of this.potions) {
//       totalCost += potion.price;
//     }
//     return totalCost;
//   },
// };

// console.log(atTheOldToad.getTotalPrice());

/**
 * ? Зміна об'єкта в масиві - Changing an object in an array
 * Об'єкт atTheOldToad має наступні властивості:
 * potions — масив об'єктів зілль
 * getPotions() — метод, який повертає значення властивості potions
 * updatePotionName() — метод, який приймає два параметра рядків oldName і newName
 * Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював
 * назву зілля з oldName на newName в масиві зілля у властивості potions.
 */

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         this.potions.name = newName;
//       }
//     }
//   },
// };

// atTheOldToad.updatePotionName('Stone skin', 'Invisibility'); // [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]
