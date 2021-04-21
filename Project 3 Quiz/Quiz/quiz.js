/*
    P3: Quiz
    Benjamin Weber
    weberbj
*/
const questions = [{
        question: "When was IU founded?",
        answers: {
            a: "1818",
            b: "1820",
            c: "1822",
        },
        correct: "b",
    },
    {
        question: "When did IU become a university?",
        answers: {
            a: "1838",
            b: "1882",
            c: "1824",
        },
        correct: "a",
    },
    {
        question: "How many championships has IU Men's basketball won?",
        answers: {
            a: "3",
            b: "7",
            c: "5",
        },
        correct: "c",
    },
    {
        question: "How many consecutive Big 10 championships has IU won in Swimming?",
        answers: {
            a: "4",
            b: "20",
            c: "8",
        },
        correct: "b",
    },
    {
        question: "Who was the first woman to win the Nobel Prize in Economic Sciences?",
        answers: {
            a: "Ethel P. Clarke",
            b: "Ellenor Brewster Dunn",
            c: "Elinor Ostrom",
        },
        correct: "c",
    },
];

function makeQuiz() {

    const output = [];


    questions.forEach(
        (currQuest, questNum) => {


            const answers = [];


            for (letter in currQuest.answers) {


                answers.push(
                    `<label>
            <input type="radio" name="question${questNum}" value="${letter}">
            ${letter} :
            ${currQuest.answers[letter]}
            </label>`
                );
            }


            output.push(
                `<div class="slide">
            <div class="question"> ${currQuest.question} </div>
            <div class="answers"> ${answers.join("")} </div>
        </div>`
            );
        }
    );


    container.innerHTML = output.join('');
}

function showResults() {


    const answerContainers = container.querySelectorAll('.answers');

    let numCorrect = 0;

    questions.forEach((currQuest, questNum) => {

        const answerContainer = answerContainers[questNum];
        const selector = `input[name=question${questNum}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;


        if (userAnswer === currQuest.correct) {

            numCorrect++;


            answerContainers[questNum].style.color = 'green';
        } else {

            answerContainers[questNum].style.color = 'red';
        }
    });


    resultsC.innerHTML = `${numCorrect} out of ${questions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
        back.style.display = 'none';
    } else {
        back.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
        next.style.display = 'none';
        submit.style.display = 'inline-block';
    } else {
        next.style.display = 'inline-block';
        submit.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}


const container = document.getElementById('quiz');
const resultsC = document.getElementById('results');
const submit = document.getElementById('submit');


makeQuiz();

const back = document.getElementById("previous");
const next = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

submit.addEventListener('click', showResults);
back.addEventListener("click", showPreviousSlide);
next.addEventListener("click", showNextSlide);

let time = 0;

const countTimer = setInterval(count, 1000);

window.onload = countTimer;

function count() {
  time++;
  console.log(time + " seconds");
}

document.querySelector('.test').addEventListener('click', function () {
  document.querySelector('.timer').innerText = "Total Time: " + time + " seconds";
  clearInterval(countTimer);
  time = 0;
});

let i = 20;
function move() {
  if (i == 0) {
    i = 20;
    let progBar = document.getElementById("progressBar");
    let width = 20;
    let id = setInterval(frame);
    function frame() {
      if (width >= 101) {
        clearInterval(id);
        i = 0;
      } else {
        width = width * currentSlide;
        progBar.style.width = width + "%";
      }
    }
  }
}