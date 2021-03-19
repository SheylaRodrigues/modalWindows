'use strict';

// the code below activates a text box when we click the buttons

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal'); // used ALL because this class has 3 elements

// because the btnOpenModal has the class .show-modal assigned to it and this class has 3 elements, we use the for loop to cycle thru them, it works like an array
// for (let i = 0; i < btnOpenModal.length; i++)
//   btnOpenModal[i].addEventListener('click', function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

// the btnOpenModal[i].addEventListener('click, function()) add event when we click and the function describes the event the modal variable selects the modal class that has another class assigned to it: hidden. The classList.remove removes this class and makes the window appear. Same happens with the overlay background.

// the function created below, access the variable modal and add the hidden property to it
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// so here we add an eventListener when click that calls the closeModal function and executes it
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// below we are adding an event whenever a key is pressed down, then calling the closeModal function if the key pressed is Escape AND if the modal.classList DOES NOT contains the class 'hidden'(so it means it's currently showing). We track which key is being pressed by adding the (event) as an argument
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
