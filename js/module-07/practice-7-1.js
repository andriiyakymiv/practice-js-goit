const ref = {
  body: document.querySelector('body'),
  title: document.querySelector('#title'),
  list: document.querySelector('.list'),
  dataTopicAll: document.querySelectorAll('[data-topic]'),
  firstTopic: document.querySelector('[data-topic]'),
  firstTopicTwo: document.querySelectorAll('[data-topic]')[0],
  firstTopicThree: document.querySelector('.list').firstElementChild,
  firstTopicFour: document.querySelector('.list li'),
  firstTopicFive: document.querySelector('.list li:first-Child'),
};

//? 1 - отримай body елемент і виведи його в консоль;
//* console.log(ref.title);

//* 2 - отримай елемент id="title" і виведи його в консоль;
//? console.log(ref.list);

//* 3 - отримай елемент class="list" і виведи його в консоль;
//? console.log(ref.dataTopicAll);

//* 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
//? ref.dataTopicAll.forEach(topic => {
//?   console.log(topic);
//?   const title = document.querySelector('h3');
//?   console.log(title);
//? });

//* 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
//? console.log(ref.firstTopicTwo);
//? console.log(ref.firstTopicThree);
//? console.log(ref.firstTopicFour);
//? console.log(ref.firstTopicFive);

//* 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const lastElement = document.querySelector('[data-topic]:last-child');
// console.log(lastElement);

//* 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const neighborElement = document.querySelector('#title').nextElementSibling;
// console.log(neighborElement);

//* 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const elementH3Title = document.querySelectorAll('h3');
// console.log(elementH3Title);

//* 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// const h3RedActive = document
//   .querySelectorAll('h3')
//   .forEach(title => title.classList.add('active'));

//* 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const searchElmLiNavigation = document.querySelector(
//   '[data-topic="navigation"]'
// );
// console.log(searchElmLiNavigation);

//* 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// const searchElemDataTopicStyle = document.querySelector(
//   '[data-topic="navigation"]'
// );
// console.log(searchElemDataTopicStyle);
// searchElemDataTopicStyle.style.backgroundColor = 'yellow';

//* 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const changeTextDataTopic = document.querySelector(
//   '[data-topic="navigation"] p'
// );
// console.log(changeTextDataTopic);
// changeTextDataTopic.textContent = 'Я змінив тут текст!';

//* 13 - створи const currentTopic = "manipulation"; після цього
//* знайди елемент у якогоо атрибут data-topic має значення,
//* яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = 'manipulation';
// const topicEl = document.querySelector(`li[data-topic=${currentTopic}]`);
// console.log(topicEl);

//* 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// const currentTopic = 'manipulation';
// const topicEl = document.querySelector(`li[data-topic=${currentTopic}]`);
// console.log(topicEl);
// topicEl.style.backgroundColor = 'blue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const completedElem = document.querySelector('.completed');
// console.log(completedElem);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// console.log(completedElem.parentElement);
// console.log(completedElem.parentNode);
// console.log(completedElem.closest('li').remove());

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// 20 - очисти список
