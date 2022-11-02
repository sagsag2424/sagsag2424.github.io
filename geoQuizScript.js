questionsArray = []
answersArray = []
imgInQuestion = false
audioInQuestion = false 
imgAnswers = false
writtenAnswer = false
progPercent = 0

const QuestionTypeChoiceDiv = document.getElementById("mC_TI_div")
const AnswerInput = document.getElementById("input_ans")
const FinishDiv = document.getElementById("finish_div")
const FinishButton = document.getElementById("finish_btn")
const AfterQuestionDiv = document.getElementById("after_question")
const QuestionDiv = document.getElementById("question_div")
const QuestionTextContent = document.getElementById("question_text_content")
const QuestionImgContent = document.getElementById("question_img")
const QuestionAudioSourceContent = document.getElementById("question_audio_source_content")
const QuestionAudioContent = document.getElementById("question_audio_content")
const CorrectWrongText = document.getElementById("correct_wrong")
const CorrectAnswerText = document.getElementById("correct_ans")
const QuizDiv = document.getElementById("quiz")
const WelcomeDiv = document.getElementById("welcome_div")
const QuestionHeading = document.getElementById("question_heading")
const AnswerButtonsDiv = document.getElementById("ans_btns_div")
const TextInputDiv = document.getElementById("text_input_div")
const ProgressBar = document.getElementById("prog_bar")
const ProgressBarBg = document.getElementById("prog_bg")
const NextButton = document.getElementById("next")


function choose(qs, as, txt, imInQ, audInQ, imInAns=false){
	//store the passed arrays into the questions and answers arrays
	questionsArray = [...qs]
	answersArray = [...as]
	//check if the question contains images or audio and display the relevant html tag
	imgInQuestion = imInQ
	imgInQuestion ? show(QuestionImgContent) : hide(QuestionImgContent)
	audioInQuestion = audInQ
	audioInQuestion ? show(QuestionAudioContent) : hide(QuestionAudioContent)
	//check if the answers are images
	imgAnswers = imInAns
	imgAnswers ?  changeQuestionType("multi_choice") : show(QuestionTypeChoiceDiv)
	//put the passd text into the heading of the question
	QuestionHeading.innerText = txt
	//reset the progress bar and define the addition percentage
	progPercent = 0
	moveProgBar()
	progAdd = 100/questionsArray.length
	//hide the welcome div and the finish div
	hide(WelcomeDiv)
	hide(FinishDiv)
}

function changeQuestionType(type){
	//change the type of the question, hide and show the relevant tags
	if (type == "multi_choice"){
		show(AnswerButtonsDiv, "flex")
		hide(TextInputDiv)
		writtenAnswer = false
	} else {
		hide(AnswerButtonsDiv)
		show(TextInputDiv)
		writtenAnswer = true
	}
	start()
}

function start(){

	hide(QuestionTypeChoiceDiv)
	hide(WelcomeDiv)
	//reset variables
	answeredQuestions = []
	score = 0
	numOfQuestions = 0

	show(QuizDiv)
	showQuestion()
}

function showQuestion(){

	show(FinishButton)
	show(QuestionDiv)
	hide(AfterQuestionDiv)
	nextAllowed = false

	if (answeredQuestions.length >= questionsArray.length){
		console.log("finish")
		finish()
	}

	for (let i = 0; i < questionsArray.length; i++){
		questionIndex = Math.floor(Math.random() * questionsArray.length);
		currentQuestion = questionsArray[questionIndex]
		if(!answeredQuestions.includes(currentQuestion)){
			answeredQuestions.push(currentQuestion)
			break
		}
	}

	correctAnswer = answersArray[questionIndex]

	if (imgInQuestion){
		QuestionTextContent.innerHTML = ""
		QuestionImgContent.src = currentQuestion
	} else if (audioInQuestion){
		QuestionTextContent.innerHTML = ""
		QuestionAudioSourceContent.src = currentQuestion
		QuestionAudioContent.load()
	} else {
		QuestionTextContent.innerText = currentQuestion[0]
	}

	numOfQuestions ++

	if (writtenAnswer){
		show(TextInputDiv)
		AnswerInput.focus()
	} else {
		show(AnswerButtonsDiv, "flex")

		let choices = [correctAnswer]
		let i = 0
		while (i < 3){
			currentAnswer = answersArray[Math.floor(Math.random() * answersArray.length)]
			if (!choices.includes(currentAnswer)){
				choices.push(currentAnswer)
				i ++
			}
		}

		for(let i = 1; i <= 4; i++){
			const CurrentButton = document.getElementById("btn" + String(i))
			let answersIndex = Math.floor(Math.random() * choices.length);
			let toOut = ""
			imgAnswers ? toOut = "<img class='answer_images' src='"+choices[answersIndex][0]+"'>" : toOut = choices[answersIndex][0]
			CurrentButton.innerHTML = toOut
			choices.splice(answersIndex, 1)
		}
	}
}

function finish(){
	if (audioInQuestion) QuestionAudioContent.pause()

	show(WelcomeDiv)
	hide(FinishButton)
	show(FinishDiv)
	hide(AfterQuestionDiv)
	nextAllowed = false
	hide(QuestionDiv)

	FinishDiv.innerText = "You got " + String(score) + " out of " + String(numOfQuestions)

	imgInQuestion = false
	audioInQuestion = false
}

function btnanswer(buttonText){
	imgAnswers ? userAnswer = buttonText.slice(25, -2) : userAnswer = buttonText
	userAnswer == correctAnswer[0] ? answer(true) : answer(false)
}

AnswerInput.addEventListener("keydown", (event) => {if (event.key === "Enter") answer(false)})
function textInputAns(userAnswer){
	for (let i = 0; i < correctAnswer.length; i++){
		if (replaceUnwantedChars(userAnswer) == replaceUnwantedChars(correctAnswer[i])){
			answer(true)
		}
	}
}
 

function answer(correctlyAnswered){
	if (audioInQuestion) QuestionAudioContent.pause()

	hide(QuestionDiv)
	show(AfterQuestionDiv)
	nextAllowed = true
	if(correctlyAnswered){
		score ++
		CorrectWrongText.innerText = "🎉CORRECT!!🎉"
		CorrectWrongText.style.color = "lime"
		CorrectAnswerText.innerHTML = ""
	} else{
		console.log("false")
		CorrectWrongText.innerText = "WRONG!!"    
		CorrectWrongText.style.color = "red"
		CorrectAnswerText.innerHTML  = "The correct answer is "
		imgAnswers ? CorrectAnswerText.innerHTML += ("<img class='ansImg' src='" + correctAnswer[0] + "'>") : CorrectAnswerText.innerHTML += correctAnswer[0]
		console.log("false")  
	}
	 
	AnswerInput.value = ""
	progPercent += progAdd
	moveProgBar()

}

function moveProgBar() {ProgressBar.style.width = progPercent + '%'}
function replaceUnwantedChars(str){return str.toLowerCase().replace(/\s+/g, '').replace("'", '').replace(".", '').replace("-", '')}
function hide(object){object.style.display = "none"}
function show(object, displayType="block") {object.style.display = displayType}


