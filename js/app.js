
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

	/** Clicking to Start a New Game */
	function newGame() {
		$(".guessBox").children().remove();
		$("#feedback").text("Make your Guess!");
		$("#count").text("0");
		secretNumber;
		return
	}

	$(".new").click(newGame());

	var userString = $("#userGuess").val();
	var userInteger = +userString;

	/* Validate Numbers */
	function validNumbers() {
		if (userInteger > 100 || userInteger < 1) {
			alert("Number must be greater than one and less than 100.");
			$("input[type=text], textarea").val("");
		}
		if (userInteger > 100 || userInteger < 1) {
			alert("Number must be greater than one and less than 100.");
			$("input[type=text], textarea").val("");
		}
		if (userInteger == $("#guessList").children().text()) {
			alert("You already guessed that number!");
		}
		if (userInteger === secretNumber) {
			alert("You won!  Click New Game to play again.");
		}
		$("input[type=text], textarea").val("");
		event.preventDefault();
	}

	/** Run Numbers */
	function runNumbers() {
		$(".guessBox").append("<li>" + userInteger + "</li>");
		if (userInteger > (secretNumber + 5) || userInteger < (secretNumber - 5)) {
			$("#feedback").text("Super Hot");
		} else if (userInteger > secretNumber + 10 || userInteger < secretNumber - 10) {
			$("#feedback").text("Hot");
		} else if (userInteger > secretNumber + 15 || userInteger < secretNumber - 15) {
			$("#feedback").text("Warm");
		} else if (userInteger > secretNumber + 20 || userInteger < secretNumber - 20) {
			$("#feedback").text("Luke Warm");
		} else if (userInteger > secretNumber + 25 || userInteger < secretNumber - 25) {
			$("#feedback").text("Cold");
		} else if (userInteger > secretNumber + 30 || userInteger < secretNumber - 30) {
			$("#feedback").text("Super Cold");
		} else {
			$("#feedback").text("Frozen Solid");
		}
	}





	$("#guessButton").click(function (event) {
		validNumbers();
		runNumbers();
	});
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



