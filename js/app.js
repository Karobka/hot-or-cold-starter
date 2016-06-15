
$(document).ready(function () {

	/*--- Display information modal box ---*/
	$(".what").click(function () {
		$(".overlay").fadeIn(1000);

	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function () {
		$(".overlay").fadeOut(1000);
	});

	/** Generate random whole secretNumber on page load and clicking .new game button. */

	var secretNumber = Math.floor((Math.random() * 100) + 1);
	console.log(secretNumber);
	var guessLogs = [];

	/** Get User Guess & Reset Form*/
	$("#guessButton").click(function() {
		var userNumber = $("#userGuess").val();
		console.log("User guessed: " + userGuess.value);
		event.preventDefault();
		validateUserGuess(userNumber); //validate the guess
		//addUserGuess(userNumber); //add the guess to the array and the li.
		$("input[type=text], textarea").val("");
	})

		
	/** Validate User Guess
	 	1. is input a valid number: >1 and <100 and no decimals and isNaN
		 1a. if so alert error message
		 2. is input already guessed (already in the array)
		 	2a. if so alert "already guessed" message
	*/
	function validateUserGuess(guessName) {
		for (var i = 0; i < guessLogs.length; i++) {
			if (guessName == guessLogs[i]) {
				return alert("You already used that number. Choose another one.");
			}
		}
		if (guessName < 1 || guessName > 100 || guessName % 1 !== 0) {
			return alert("Please enter a number from 1 to 100 with no decimals and no letters.");
			
		} else {
			/** Add User Guess to List and Array */
				guessLogs.push(guessName);
				console.log("guessLogs so far:" + guessLogs);
				$("#guessList").append("<li>" + guessName + "</li>");
			}

		}
		
	








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



