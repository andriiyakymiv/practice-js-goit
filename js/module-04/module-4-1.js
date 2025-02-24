/**
 * ? Створення об'єкта
 * Оголоси змінну apartment і задай ій об'єкт, який описує квартиру з наступними характеристиками:
 * imgUrl - рядок, що містить шлях до зображення, значення "https://via.placeholder.com/640x480";
 * descr - рядок, що містить опис, значення "Spacious apartment in the city center";
 * rating - число, що містить рейтинг, значення 4;
 * price - число, що містить ціну, значення 2153;
 * tags - масив рядків, що містить метаінформацію, значення ["premium", "promoted", "top"].
 */

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// console.log(apartment);

/**
 * ? Вкладені властивості
 * Об'єкт apartment описує квартиру з наступними характеристиками
 * imgUrl - шлях до зображення
 * descr - опис
 * rating - рейтинг
 * price - ціна
 * tags - метаінформація
 * Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника.
 * Додай об'єкту owner наступні властивості:
 * name - рядок, що містить ім'я власника, значення "Henry";
 * phone - рядок, що містить номер телефону, значення "982-126-1588";
 * email - рядок, що містить пошту, значення "henry.carter@aptmail.com"
 */

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

/**
 * ? Доступ до властивостей через крапку
 * Об'єкт apartment описує квартиру і має 5 властивостей: шлях до зображення, опис, рейтинг, ціна, теги.
 * Оголошені 4 змінні, значенням яких є значення властивостей об'єкту apartment.
 * Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
 * aptRating - рейтинг;
 * aptDescr - опис;
 * aptPrice - ціна;
 * aptTags - теги.
 */

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

/**
 * ? Доступ до вкладених властивостей
 * Об'єкт apartment описує квартиру 6 властивостями: шлях до зображення, опис, рейтинг, ціна, теги і власник.
 * Властивість owner (власник) також є об'єктом. Оголошено шість змінніх, значення яких це значення відповідних властивостей об'єкту apartment.
 * Доповни код, задавши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
 * ownerName - ім'я власника;
 * ownerPhone - телефон власника;
 * ownerEmail - пошта власника;
 * numberOfTags - кількість елементів масиву у властивості tags;
 * firstTag - перший елемент масиву у властивості tags;
 * lastTag - останній елемент масиву у властивості tags.
 */

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags.pop();

/**
 * ? Доступ до властивостей через квадратні дужки
 * Об'єкт apartment описує квартиру з 5 властивостями: шлях до зображення, опис, рейтинг, ціна, теги.
 * Оголошені 4 змінні, значення яких це значення відповідних властивостей об'єкту apartment.
 * Доповни код, задавши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис квадратних дужок.
 * aptRating - рейтинг
 * aptDescr - опис;
 * aptPrice - ціна;
 * aptTags - теги.
 */

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
