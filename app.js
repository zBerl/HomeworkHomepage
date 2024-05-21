// jquery hide tables then show them when the page is ready 
$(document).ready(function(){
  $('.homeworkLeft').hide();
  $('.homeworkRight').hide();
  $('.homeworkLeft').fadeIn(2500);
  $('.homeworkRight').fadeIn(2500);
}
);
// welcome message placed in the class .logoHeadline h3 element in jquery 
$(document).ready(function(){
  $('.logoHeadline').html(' Welcome to my Homework Page!');
}
);
// Set conditionals depending on time of the day for welcome message in jQuery
var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
  greeting = 'Good Evening!';
}
else if (hourNow > 12) {
  greeting = 'Good Afternoon!';
}
else if (hourNow > 0) {
  greeting = 'Good Morning!';
}
else {
  greeting = 'GoodDay!';
}
// prepends to .logoHeadline element in jquery append would be after the element
$(document).ready(function(){
  $('.logoHeadline').prepend(greeting);
}
);