// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
 

		// objects 
			var triviaGame = { 
			questions: ["Who were there first two astronauts that landed on the moon in 1969?", "Which major battle of WWII started on August 23, 1942 and was fought in what is now the city of Volgograd?", "Which U.S. president made the first presidential radio broadcast?", "American mobster Al Capone was sentenced to 11 years in federal prison for what crime?", "The period of European history that lasted from the 14th to the the 17th century is known as what?", "What Byzantine city was renamed Istanbul after being captured by the Ottoman Empire?"],
		     	answers: ["Neil Armstrong and Buzz Aldrin","The Battle of Stalingrad", "Calvin Coolidge", "Tax Evasion", "The Renaissance", "Constantinople" ],
			randomAnswers: ["John Glenn","Battle of Citate", "George Washington", "Bootlegging", "Dark ages", "Thor" ],
			randomAnswers1: ["Scott Carpenter","Battle of Amba Jebelli", "Thomas Jefferson", "Sorcery", "The age of innocence", "Thomas Aquinas" ]
  		   	};
		

		// variables
var iteration = 0;
var currentQuestion = triviaGame.questions[iteration];
var correctAnswer = triviaGame.answers[iteration];
var randomA = triviaGame.randomAnswers[iteration]
var randomA1 = triviaGame.randomAnswers1[iteration]
var incorrectAnswer;
var userAnswer;
var arrAnswers = [];
var score =0;
var wrong = 0;

 
			
		// arrays
		// array to sort answers in random order
		function arrfunction(){
		arrAnswers= [];  // to clear the array after each iteration
		arrAnswers.push(correctAnswer, randomA, randomA1);
		
		arrAnswers.sort();
		}
		

		// functions
		function clearChecked(){
		//to uncheck all checkboxes on the next question
		$("#c1").prop("checked", false);
		$("#c2").prop("checked", false);
		$("#c3").prop("checked", false);
		}
		
		function nextQuestion(){
 		
;
		currentQuestion = triviaGame.questions[iteration];
		correctAnswer = triviaGame.answers[iteration];
		randomA = triviaGame.randomAnswers[iteration];
		randomA1 = triviaGame.randomAnswers1[iteration];
		// getting question on page

		$(".card-body").html(currentQuestion);
		arrfunction();
		
		//getting answers on page

		$("#chk1").html(arrAnswers[0]);
		$("#chk2").html(arrAnswers[1]);
		$("#chk3").html(arrAnswers[2]);
		}

		// console.log
     // console.log testing object data: questions

console.log(currentQuestion); //working

     // console.log testing object data answers

console.log(correctAnswer); // working
	
// console.log testing arrAnswers

console.log(arrAnswers); // working


// DOM




//Submit button with check box statement.

$( ".btn" ).click(function() {

// if the user selects all check boxes
if ($('#c1').is(":checked") && $('#c2').is(":checked") &&  $('#c3').is(":checked") || $('#c1').is(":checked") && $('#c2').is(":checked") || $('#c1').is(":checked") && $('#c3').is(":checked") || $('#c2').is(":checked") && $('#c3').is(":checked")){
alert("cannot select multiple answers, Please select only one option");
}

// if the user selects checkbox1
else if ($('#c1').is(":checked"))
{
userAnswer = $( "#chk1" ).text();
console.log(userAnswer);
}

// if the user selects checkbox2
else if ($('#c2').is(":checked"))
{
userAnswer = $( "#chk2" ).text();
console.log(userAnswer);
}

// if the user selects checkbox3
else if ($('#c3').is(":checked"))
{
userAnswer = $( "#chk3" ).text();
console.log(userAnswer);
}
// test condition of checkboxes
trivia();
});
// functions
// comparison of correct answer and user answer

function trivia(){
	if ($('#c1').is(":checked") === true || $('#c2').is(":checked") === true|| $('#c3').is(":checked")=== true)
		{	
			
			if(iteration < triviaGame.questions.length){
				if (userAnswer === correctAnswer)
				{
				
					alert("Answer Correct")
					  //to stop process if at the end of the array
					iteration++;
					console.log(iteration);
					// function to move to the next question
					score++;
					clearChecked();
					nextQuestion();
					}
					else 
					{
					alert("Answer Not Correct. The correct answer is :" +correctAnswer);
					iteration++;
					// function to move to the next question
					wrong++;
					clearChecked();
					nextQuestion();
				}
			}else { clearChecked();
				nextQuestion();nextQuestion();
				alert("--- GAME OVER ---  Correct Answers: "+ score +  " Incorrect Answers : " + wrong );}
		}     
		


}
nextQuestion();
});

