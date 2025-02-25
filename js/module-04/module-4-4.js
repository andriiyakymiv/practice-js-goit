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
