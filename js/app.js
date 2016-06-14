
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	  /**Generate random whole secretNumber on page load and clicking .new game button. */
	  
	  var secretNumber = Math.floor((Math.random() * 100) + 1);
	  console.log(secretNumber);

	  $(".new").click(function() {
		  $(".guessBox").children().remove();
	  });


	  $("#guessButton").click(function(event) {
		  $(".guessBox").append('<li>' + $("#userGuess").val() + '</li>');
		  $('input[type=text], textarea').val('');
		  event.preventDefault(); 
	  });



/*



When user clicks #guessButton:
	Check for empty input.--not needed.
	Convert userGuess to an intiger.
	if "userGuess" is a number already added to "guessBox" list: alert"You already guessed that number".
		else take "userGuess" append as new list item to "guessBox"
			and append #count text incrementally as user submits guesses.
	if "userGuess" is exactly equal to #secretNumber update #feedback with you won message.
		Else if "userGuess" is greater or less than "secretNumber" by 5 update "feedback" with "super hot" message.
		Else if "userGuess" is greater or less than "secretNumber" by 10 update "feedback" with "hot" message.
		Else if "userGuess" is greater or less than "secretNumber" by 15 update "feedback" with "warm" message.
		Else if "userGuess" is greater or less than "secretNumber" by 20 update "feedback" with "luke warm" message.
		Else if "userGuess" is greater or less than "secretNumber" by 25 update "feedback" with "cold" message.
		Else if "userGuess" is greater or less than "secretNumber" by 30 update "feedback" with "super cold" message.
		Else update "feedback" with "completely frozen" message.
When user clicks .new
	Reset #feedback to default guess message.
	Remove user guess li's from .guessBox
	Reset #count to zero.
	Generate random number.
*/

});


