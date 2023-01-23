let count = document.querySelector('.count')
let btns = document.querySelectorAll('.btns button')
let counter = 0;
btns.forEach((i) => {
  i.addEventListener('click', function () {
    if (i.className == 'increase') {
      counter++;
      count.style.color = 'green'
    } else if (i.className == 'decrease') {
      counter--;
    } else {
      counter = 0;
    }
    if (counter > 0) {
      count.style.color = 'green'
    }
    if (counter < 0) {
      count.style.color = 'red'
    }
    if (counter == 0) {
      count.style.color = 'black'
    }
    count.textContent = counter;
  })

})