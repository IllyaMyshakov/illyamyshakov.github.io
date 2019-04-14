var easing = anime({
    targets: '#easing .el',
    translateY: 90,
    easing: 'easeInOutQuart'
  });

$(document).ready(function(){
    $('h1').fadeIn(3000);
});

const buttons = Array.from(document.querySelectorAll('.button')) // instanciate an array of number of buttons called 
const count = buttons.length // number of buttons
const increase = Math.PI * 2 / buttons.length // finding central angle by dividing 2*pi / number of buttons
const radius = 175 // radius of your circle

buttons.forEach((button, i) => { // function that initializes position of buttons 
    button.style.top = Math.sin(-Math.PI / 2 + i * increase) * radius + 'px'
    button.style.left = Math.cos(-Math.PI / 2 + i * increase) * radius + 'px'
})