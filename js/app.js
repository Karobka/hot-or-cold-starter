


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
	var currentGuessCount = 0;
	var userNumber = $("#userGuess").val();

	/** Get User Guess & Reset Form*/
	$("#guessButton").click(function() {
		var userNumber = $("#userGuess").val();
		console.log("User guessed: " + userGuess.value);
		event.preventDefault();
		if (validateUserGuess(userNumber)) {return }; //validate the guess and add to ul
		$("input[type=text], textarea").val("");
		updateUi(userNumber);
		updateGuessCount(currentGuessCount);
		feedbackUpdate();
	});

		
	/** Validate User Guess
	 	1. is input a valid number: >1 and <100 and no decimals and isNaN
		 1a. if so alert error message
		 2. is input already guessed (already in the array)
		 	2a. if so alert "already guessed" message
		3. otherwise push the name to the logs array and add it to the ul.
	*/
	function validateUserGuess(guessName) {
		for (var i = 0; i < guessLogs.length; i++) {
			if (guessName == guessLogs[i]) {
				alert("You already used that number. Choose another one.");
				return true;
			}
		}
		if (guessName < 1 || guessName > 100 || guessName % 1 !== 0) {
			alert("Please enter a number from 1 to 100 with no decimals and no letters.");
			return true;
		}
		return false;
	}

	/** Add User Guess to List and Array */
	function updateUi(guessName) {
		//add to guess logs
		guessLogs.push(guessName);
		console.log("guessLogs so far:" + guessLogs);
		//add to ul
		$("#guessList").append("<li>" + guessName + "</li>");
	}

	//Every time user clicks button run this function 
	//Get current text variable #count.text() and add +1
	//Take new variable and replace old # in #count.

	function updateGuessCount(currentGuessCount) {
		//currentGuessCount += 1;
		return currentGuessCount += 1;
		//$("#count").text(currentGuessCount);
	
	}

	function feedbackUpdate() {
		if (userNumber > (secretNumber + 5) || userNumber < (secretNumber - 5)) {
			$("#feedback").text("Super Hot");
		} else if (userNumber > secretNumber + 10 || userNumber < secretNumber - 10) {
			$("#feedback").text("Hot");
		} else if (userNumber > secretNumber + 15 || userNumber < secretNumber - 15) {
			$("#feedback").text("Warm");
		} else if (userNumber > secretNumber + 20 || userNumber < secretNumber - 20) {
			$("#feedback").text("Luke Warm");
		} else if (userNumber > secretNumber + 25 || userNumber < secretNumber - 25) {
			$("#feedback").text("Cold");
		} else if (userNumber > secretNumber + 30 || userNumber < secretNumber - 30) {
			$("#feedback").text("Super Cold");
		} else {
			$("#feedback").text("Frozen Solid");
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



