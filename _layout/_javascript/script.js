'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const replay = document.getElementById('replay');

runAnimation();

function resetDOM() {
  counter.classList.remove('hide');
  final.classList.remove('show');

  nums.forEach(function (num) {
    num.classList.value = '';
  });

  nums[0].classList.add('in');
}

function runAnimation() {
  nums.forEach(function (num, idx) {
    const nextToLast = nums.length - 1;

    num.addEventListener('animationend', function (e) {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        final.classList.add('show');
      }
    });
  });
}

replay.addEventListener('click', function () {
  resetDOM();
  runAnimation();
});
