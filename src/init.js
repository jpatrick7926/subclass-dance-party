$(document).ready(function() {
  window.dancers = [];
  window.circles = [];
  var players = ['Stephen', 'Durant', 'LeBron', 'Kobe'];
  var number = 0;
  $('#createDancer').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancer.$node[0].setAttribute('id', players[(number % players.length)]);
    number ++;
    window.dancers.push(dancer.$node[0]);
  });
  $('#lineUp').on('click', function () {
    $('.dancer').css('top', '300px');
    $('.rotate').css('top', '100px');
    var left = 10;
    var dancerInterval = 1820 / window.dancers.length;
    window.dancers.forEach(function(player) {
      player.style.left = left + 'px';
      left += dancerInterval;
    });
    var circleLeft = 50;
    var circleInterval = 1820 / window.circles.length;
    window.circles.forEach(function(logo) {
      logo.style.left = circleLeft + 'px';
      circleLeft += circleInterval;
    });
  });
  $('#solidDancer').on('click', function(event) {
    var solidDancerMakerFunction = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[solidDancerMakerFunction];
    
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancer.$node[0].setAttribute('class', 'solids');
    $('.solids').addClass('dancer');
  });
  $('#rotateDancer').on('click', function(event) {
    var DancerMakerFunction = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[DancerMakerFunction];
    
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancer.$node[0].setAttribute('class', 'rotate');
    $('.rotate').addClass('dancer');
    $('.rotate').attr('id', logos[courtsCount]);
    window.circles.push(dancer.$node[0]);
  });
  var courts = ['https://media.nbcbayarea.com/images/WARRIORS+COURT.jpg', 'https://s3.amazonaws.com/images.charitybuzz.com/images/152734/original.jpg_1415910574?1416330282', 'https://pbs.twimg.com/media/BrFo33JCAAAAWgq.jpg'];
  var courtsCount = 0;
  var logos = ['GSW', 'Lakers', 'Cavs'];
  $('#changeBackground').on('click', function (event) {
    $('.rotate').attr('id', logos[(courtsCount + 1) % logos.length]);
    $('body').css('background-image', 'url(' + courts[(courtsCount + 1) % courts.length] + ')');
    $('body').css('background-size', 'cover');
    courtsCount++;
  });
});

