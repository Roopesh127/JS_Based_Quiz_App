const quizapp = [
    {
        question: "Q1 : Who is Chairman of TATA GROUP ?",
        a: "Ratan Tata ",
        b: "Cyrus Mistry",
        c: "Ankit Jha",
        d:"None of Above",
        ans: "ans1",
    },
    {
        question: "Q2 : Who is known as the 'Father of the Indian Constitution ?",
        a: "Jawaharlal Nehr ",
        b: "B.R. Ambedkar",
        c: "Mahatma Gandhi",
        d:"None of Above",
        ans: "ans2",
    },
    {
        question: "3 :Who is the current Prime Minister of India ?",
        a: "Narendra Modi ",
        b: "Rahul Gandhi",
        c: "Amit Shah",
        d:"None of Above",
        ans: "ans1",
    },
    {
        question: "Q4 : Who is first Home Minister of India ?",
        a: " Mahatma gandhi",
        b: "Bhagat Singh",
        c: "Sardar Ballav Bhai Patel",
        d:"None of Above",
        ans: "ans3",
    },
    {
        question: "Q5 :What is the maximum tenure of the Prime Minister of India ?",
        a: "5 years ",
        b: "6 years",
        c: "4 years",
        d:"None of Above",
        ans: "ans1",
    },
    {
        question: "Q6 :Which political party is commonly associated with the symbol 'Lotus' ?",
        a: "Indian National Congress ",
        b: "Bahujan Samaj Party",
        c: "Bharatiya Janata Party",
        d:"None of Above",
        ans: "ans3",
    },
    {
        question: "Q7 :Who was the first woman Prime Minister of India ?",
        a: "Indira Gandhi ",
        b: "Sonia Gandhi",
        c: "Pratibha Patil ",
        d:"None of Above",
        ans: "ans1",
    },
    {
        question: "Q8 :In which year did India gain independence from British rule ?",
        a: "1945 ",
        b: "1947",
        c: "1950",
        d:"None of Above",
        ans: "ans2",
    },

];

const question = document.querySelector('.Question');

const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')

const showscore = document.querySelector('#showscore')

let questionCount = 0;
let Score = 0;

const loadQuestion =() =>{
    const questionlist = quizapp[questionCount];
    question.innerText = questionlist.question;

    option1.innerText = questionlist.a;
    option2.innerText = questionlist.b;
    option3.innerText = questionlist.c;
    option4.innerText = questionlist.d;
}
loadQuestion();

const getCheckAnswer = ()=>{
    let answer;

    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll= () =>{
    answers.forEach((curAnsElem)=>curAnsElem.checked = false);
}

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();

    if(checkedAnswer ===  quizapp[questionCount].ans ){
        Score++;
    };
    questionCount++;

    deselectAll();

    if(questionCount < quizapp.length){
        loadQuestion();
    }
    else{
        showscore.innerHTML = `
           <h3> You scored ${Score}/${quizapp.length} </h3>
           <button class ="btn" onclick = "location.reload()"> PLAY AGAIN</button>
        `;
        showscore.classList.remove('Scorearea');
    }
});