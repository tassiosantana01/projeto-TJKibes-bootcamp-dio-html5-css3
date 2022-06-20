"use strict";

var cards = document.querySelectorAll('.card');
var hasFlippedCard = false;
var firstCard, secondCard;
var lockBoard = false;

function flipcard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;
  checkForMath();
}

function checkForMath() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipcard);
  secondCard.removeEventListener('click', flipcard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(function () {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach(function (card) {
    var randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
})();

cards.forEach(function (card) {
  card.addEventListener('click', flipcard);
});