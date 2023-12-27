const quizData = [
    {
        question: " Question 1: Which command is used to make the directory?",
        options: [
            "mkdir",
            "makedir",
            "mkdirectory",
            "None of the above"
        ],
        correct: 0,
    },

    {
        question: "Question 2: What is the use of 'scp' command in Linux? ",
        options: [
            "Securely Copy the files",
            "Securely Copy the files in multiple system",
            "Securely copy file between system",
            "None of the above"
        ],
        correct: 2,
    },

    {
        question: "Question 3: Which command is used to find the location of any files and directories?",
        options: [
            "Find",
            "locate",
            "man",
            "ssh"
        ],
        correct: 1,
    },

    {
        question: "Question 4: Command to display the current username?",
        options: [
            "which",
            "service",
            "whoami",
            "finger"
        ],
        correct: 2,
    },

    {
        question: "Question 5: Which command is used to terminate the procsss?",
        options: [
            "terminate",
            "kill",
            "terminator",
            "None of the above"
        ],
        correct: 1,
    }
];

//we will show the result in this.
const quiz = document.querySelector("#quiz");

// Selecting all the answers which users will select
const answerElm = document.querySelectorAll(".answer");

// Targeting all the options of a question
const options_1 = document.querySelector("#option_1");
const options_2 = document.querySelector("#option_2");
const options_3 = document.querySelector("#option_3");
const options_4 = document.querySelector("#option_4");

//targeting all the questions 

const questionElm = document.querySelector("#question");

// let [questionElm, option_1, option_2, option_3, option_4] =
//  document.querySelectorAll("#question, #option_1, #option_2, #option_3, #option_4 ");

const submitbtn = document.querySelector("#btn");



let currentQuiz = 0;
let score = 0;

// load quizz function
function loadQuiz() {
    const { question, options } = quizData[currentQuiz]
    console.log(question); // Print the current quiz question
    console.log(options);  // Print the options for the current quiz


    //dynamically showing question
    questionElm.innerText = question;
    //Dynamically showing the options
    options.forEach(
        (currOption, index) => (window[`option_${index + 1}`].innerText = currOption)
    );
} 4

loadQuiz();

// Get the selected answer function on buttonclick
function getSelectedOption() {
    let ans_index;
    answerElm.forEach((curOption, index) => {
        if (curOption.checked) {
            ans_index = index;
        }
    });
    return ans_index;
};

// code to deselect the option
function deSelectedAnswers() {
    return answerElm.forEach((curElem) => curElem.checked = false);
};

submitbtn.addEventListener('click', () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    // updating score
    if (selectedOptionIndex === quizData[currentQuiz].correct) {
        score = score + 1;
    }

    currentQuiz++;
    // Changing Next button to submit button
        if((currentQuiz + 1) === quizData.length){
        submitbtn.innerText = "Submit"
    }
    

    // Upadte the questions
    if (currentQuiz < quizData.length) {
        deSelectedAnswers();
        loadQuiz();
    } else {
        quiz.innerHTML = `<div class="result" style="text-align: center">
                         <h2> Your score: ${score}/${quizData.length} <br><h2>
                         <p> Congrulations on completing the quiz!</p>
                         <hr>
                         <h3>Correct answers are: </h3>
                         <br>
                         <p><b>Answer1:</b> mkdir </p>
                         <br>
                         <p><b>Answer2:</b> Securely copy file between system</p>
                         <br>
                         <p><b>Answer3:</b> locate</p>
                         <br>
                         <p><b>Answer4:</b> whoami</p>
                         <br>
                         <p><b>Answer5:</b> Kill </p>
                         <br>
                         <hr>
                         <button class="reload-button" onclick ="location.reload()" style="cursor: pointer" "background-color: rgb(164, 211, 194)" "border-radius: 3px" "border: 3px solid"> Play again </button>
                         </div>
                         `;
    }

});