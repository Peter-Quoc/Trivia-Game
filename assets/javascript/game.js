$(document).ready(function () {

	var questionBank = {
		q1: {
			question: "What name is Chandler's TV Guide addressed to?",
			rightAnswer: "Miss Chanandler Bong",
			wrongAnswer: ["Chandler Bing", "Mister Chandler Bing", "The Chan Chan Man"],
			answerImg: "assets/images/ChanandlerBong.gif"
		}, 
		q2: {
			question: "What does Phoebe legally change her name to??",
			rightAnswer: "Princess Consuela Banana Hammock",
			wrongAnswer: ["Phoebe Buffay-Hannigan", "Pheebs", "Crap Bag"],
			answerImg: "assets/images/PrincessConsuela.gif"
		},
		q3: {
			question: "Which cast member did Ross talk to on the phone when he couldn’t get his leather pants back on??",
			rightAnswer: "Joey",
			wrongAnswer: ["Chandler", "Monica", "Phoebe"],
			answerImg: "assets/images/LeatherPants.gif"
		},
		q4: {
			question: "What is Chandler's middle name?",
			rightAnswer: "Muriel",
			wrongAnswer: ["Eustice", "Carlos", "He didn't have one"],
			answerImg: "assets/images/Muriel.gif"
		},
		q5: {
			question: "What was Joey's recliner chair's name?",
			rightAnswer: "Rosita",
			wrongAnswer: ["Sophia", "Stevie", "Hugsy"],
			answerImg: "assets/images/Rosita.gif"
		},
		q6: {
			question: "What card did Joey think was stolen by the guy who robbed the apartment??",
			rightAnswer: "5 of Spades",
			wrongAnswer: ["7 of Hearts", "King of Clubs", "3 of Diamonds"],
			answerImg: "assets/images/Spades.gif"
		},
		q7: {
			question: "In 'The One With the Lottery,' what is the power ball number?",
			rightAnswer: "7",
			wrongAnswer: ["3", "5", "9"],
			answerImg: "assets/images/Lottery.gif"
		},
		q8: {
			question: "What age does Joey think he can act?",
			rightAnswer: "19",
			wrongAnswer: ["21", "25", "23"],
			answerImg: "assets/images/JoeyAge.gif"
		},
		q9: {
			question: "What type of animal is 'Hugsy'?",
			rightAnswer: "Penguin",
			wrongAnswer: ["Rabbit", "Bear", "Dog"],
			answerImg: "assets/images/Hugsy.gif"
		},
		q10: {
			question: "Who taught Ben about Hanukkah?",
			rightAnswer: "The Holiday Armadillo",
			wrongAnswer: ["Santa", "Superman", "Catwoman"],
			answerImg: "assets/images/Armadillo.gif"
		}

	};

	function triviaGame() {

		//Playing Audio
		// var song = $("#themeSong");
		// function playAudio() { 
  //   		song.play(); 
		// };
		// playAudio();

		//Declaring Neccesary Variables
		var questionNum = 1;
		var timer = 30;
		var intervalId;
		var correct = 0;
		var incorrect = 0;
		var unanswered = 0;
		//Shuffle variables
		// var shuffledArray = [];
		// var randomQuestion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		$(".Timer").html("<h2>" + timer + " Seconds Left!</h2>");

		//Timer Functions
			//Interval to decrease per second
		function runTimer() {
	      intervalId = setInterval(decrement, 1000);
	   };
	   	//reducing timer count by 1 for visual
	   function decrement() {
	      timer--;
	      $(".Timer").html("<h2>" + timer + " Seconds Left!</h2>");

	      //Answer Screen
	      if (timer === 0) {
				unanswered++;
				console.log(unanswered);
				$(".BoxTitle").html("<h1>Incorrect!</h1>");
				$(".Timer").html("");
				$(".Answer").html("<h3>" + questionBank.q1.rightAnswer + "</h3>");
				var image = $("<div>");
				image.addClass("AnswerScreenImg")
				image.html("<img src='" + questionBank.q1.answerImg + "'>");
				$(".Answer").append(image);
				clearInterval(intervalId);
			};
	  	};

	  	function runAnswerScreenTimer() {
	      intervalId2 = setInterval(questionGen, 5000);
	   };

	   function AnswerScreenTimer(){
			timer--;
	      $(".Timer").html("<h2>" + timer + " Seconds Left!</h2>");
	   };

	  	// Shuffle Answers to Random Index in Array
	  	// function shuffle() {
	  	// 	//Adding all answers to arrray
	  	// 	for (var i = 0; i < questionBank.q1.wrongAnswer.length; i++){
	  	// 		shuffledArray.push(questionBank.q1.wrongAnswer[i]);
	  	// 	}
	  	// 	shuffledArray.push(questionBank.q1.rightAnswer)
	  	// 	console.log(shuffledArray);
	  	// };

	  	// for (var i = 1; i < randomQuestion.length + 1; i++) {
	  	// 	var questionLoop = "questionBank.q" + i + ".question";
	  	// };
	  	
  		//Correct Answer Function
  		function RightAnswer() {
			correct++;
			questionNum++;
			clearInterval(intervalId);
			$(".Timer").html("<h2>Correct!</h2>");
			$(".Answer").html(correctAnswer);
			var image = $("<div>");
			image.addClass("AnswerScreenImg");
			image.html("<img src='" + questionBank.q1.answerImg + "'>");
			$(".Answer").append(image);
		};
  		//Incorrect Answer Function
  		function WrongAnswer() {
			incorrect++;
			questionNum++;
			clearInterval(intervalId);
			$(".Timer").html("<h2>Incorrect!</h2>");
			$(".Answer").html(correctAnswer);
			var image = $("<div>");
			image.addClass("AnswerScreenImg");
			image.html("<img src='" + questionBank.q1.answerImg + "'>");
			$(".Answer").append(image);				
		};
	  	//Starting Function
	  	function questionGen() {

	  		//Displays Timer
	  		$(".Timer").html("<h2>" + timer + " Seconds Left!</h2>");

	  		//Displays Question
			$(".BoxTitle").html("<h1>Question " + questionNum + "</h1>");

	   	//Runs Timer
	   	runTimer();

			$(".Question").html("<h3>" + questionBank.q1.question +"</h3>");
			for (var i = 0; i < questionBank.q1.wrongAnswer.length; i++){
				var options = $("<div>");
				options.addClass("WA Aswr");
				options.html("<h4>" + questionBank.q1.wrongAnswer[i] + "</h4>");
				$(".Answer").append(options);
			}
			var correctAnswer = $("<div>");
			correctAnswer.addClass("RA Aswr");
			correctAnswer.html("<h4>" + questionBank.q1.rightAnswer + "</h4>");
			$(".Answer").append(correctAnswer);
			$(".Button").html("");


			
			$(".RA").on("click", function(event){
				RightAnswer();
			});


			$(".WA").on("click", function(event){
				WrongAnswer();
			});

		};



		questionGen();
	}

	$(".Start").on("click", triviaGame)

});