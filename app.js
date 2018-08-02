

$(document).ready(function(){

  function timer(){
    var i = 12; // starting value to count down from

    var timer = setInterval(function() {
      console.log(i);
      $('.timer-box').text(i);
      i--;
      if(i < 1) {

        console.log('done!')
        clearInterval(timer);
      }
    }, 1000);
  }
  timer();




  // console.log('app.js sanity check');
  $('audio').hide();

  $('.content-box').click(function(){
    $('audio').show();
  })

  $('.text-input').keyup(function(){
    var value = $(this).val();
    $('.render-text').text(value);
  }).keyup();





  $('.jumbotron').click(function(){
      var colorArray = ["red", "green", "blue", "orange", "purple", "yellow"];

      var rng = Math.random();
      rng = rng * 10 / 2;
      rng = Math.round(rng);

      console.log(rng);

      $(this).css('background-color', colorArray[rng] );
  });





}); // NOTE: closes document.ready()
