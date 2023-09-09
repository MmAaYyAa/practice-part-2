// const inputEl = document.querySelector("#input");
// console.dir(inputEl)
// const btn = document.querySelector('button');
// btn.addEventListener('click', handler);
// function handler(event) {
//     inputEl.value = 'Bye!'
// }


//**********3****************************** */
// const button = document.querySelector("button");
// const firstInput = document.querySelector("#first-input");
// const secondInput = document.querySelector("#second-input");

// button.addEventListener("click", handleClick);

// function handleClick() {
//     const firstValue = firstInput.value;
//     firstInput.value = secondInput.value;
//     secondInput.value = firstValue;
// }

/***************4*********************** */
//  const testInput = document.querySelector('#test');
// const resultInput = document.querySelector('#result');
// const btn = document.querySelector('button');

// btn.addEventListener('click', onClick)

// function onClick() {
//     if (isNaN(testInput.value) ) {
//         return alert("Ввели не число");
//     }

//     resultInput.value = Math.pow(testInput.value, 2)
// };

/*******************5*********************** */

// const testInput = document.querySelector('#test');
// const resultInput = document.querySelector('#result');
// const btn = document.querySelector('button');

// btn.addEventListener('click', onClick)

// function onClick() {
//     resultInput.value = Math.pow(testInput.value, 2)
// };

//***************6************************* */

// const title = document.querySelector('h1')
// const ulEl = document.createElement("ul");
// title.after(ulEl)
// const arr = [];
// let promptText =  prompt('Enter number');
// while (promptText) {
//     const liEl = document.createElement('li')
//     liEl.textContent = promptText;
//     arr.push(liEl);
//     promptText = prompt('Enter number')

// }
// ulEl.append(...arr)

//********************7********************** */
// const links = document.querySelectorAll("a");
// links.forEach((link) => link.addEventListener("mouseover", onMouseOver));

// function onMouseOver(event) {
//   event.target.title = event.target.textContent;
// }

/**************************8******************** */
// const list = document.querySelector('div');

// list.addEventListener('click', onClick);

// function onClick(event) {
//   let element = event.target;
//     if (element.nodeName !== 'SPAN') {
//         return;
//     }

//   if (element.style.backgroundColor === 'red') {
//     element.style.backgroundColor = 'green'
//   } else {
//     element.style.backgroundColor = 'red'
//   }
// }