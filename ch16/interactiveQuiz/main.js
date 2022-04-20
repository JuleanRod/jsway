// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

function displayQuestions() {
    
    
    questions.forEach((question, i) => { 
        const p = document.createElement('p');
        const answerButton = document.createElement('button');
        answerButton.innerText = 'Show answer';
        p.innerHTML += `<strong>Question ${i+1}</strong>: <em>${question.statement}</em>`;
        answerButton.setAttribute('id', `${i+1}`);
        document.getElementById('content').appendChild(p);
        document.getElementById('content').appendChild(answerButton);
    })
}


document.addEventListener('click', e => {
    // e.target.hidden = true;
    const q = questions.filter((_, i) => i == e.target.id - 1);
    const child = document.getElementById(`${e.target.id}`);
    const answer = document.createElement('p');
    answer.innerText = q[0].answer;
    answer.setAttribute('id', `answer${e.target.id}`)
    document.getElementById("content").replaceChild(answer, child);
    console.log(q[0].answer);
    

})


displayQuestions();