var easing = anime({
    targets: '#easing .el',
    translateY: 90,
    easing: 'easeInOutQuart'
  });

$(document).ready(function(){
    $('h1').fadeIn("slow");
});