const link = document.querySelector('.link');
console.log(link.classList);

const hasActiveClass = link.classList.contains('is-active');
console.log(`hasActiveClass - ${hasActiveClass}`);

link.classList.add('special');
console.log(link.classList);

link.classList.remove('is-active');
console.log(link.classList);

link.classList.toggle('is-active');
console.log(link.classList);

link.classList.replace('special', 'regular');
console.log(link.classList);

const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close
