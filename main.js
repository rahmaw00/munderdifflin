let munder = document.getElementById('munder')
let quiz = document.getElementById('quiz')
let results = document.getElementById('results')

munder.addEventListener('mouseover', (e) => {
  e.target.style.color = 'brown'
})
munder.addEventListener('mouseout', (e) => {
  e.target.style.color = '#7c5a0b'
})

// let submit = document.getElementById('submit')

// function buildQuiz(){
//   const output = []
//
//   Questions.forEach(
//     (currentQuestion, questionNumber) => {
//       const answers = [];
//       for(letter in currentQuestion.answers) {
//         answers.push(
//           <label>
//             <input type="radio" name="questions${questionNumber}" value="${letter}">
//             ${letter} :
//             ${currentQuestion.answers[letter]}
//           </label>
//         );
//       }
//       output.push(
//         <div class="question"> ${currentQuestion.question} </div>
//         <div class="answers"> ${answers.join('')}</div>
//       );
//     }
//   );
//
//   quizContainer.innerHTML = output.join('');
//
// }
//
// // Questions.forEach( (currentQuestion, questionNumber) => {
// });
//
// buildQuiz();
//
// submit.addEventListener('click', results)
//
// const Questions = [
//   {
//     question: "Are you buying for your office?"
//     answers: {
//       true: "Yes",
//       false: "No"
//     },
//     correctAnswer: "Yes"
//   },
//   {
//     question: "Are you buying for a classy family member or colleague?"
//     answers: {
//       true "Yes",
//       false: "No"
//     },
//    correctAnswer: "Yes"
//   },
//   {
//     question: "Are you buying for an environmentally-conscious friend?"
//     answers: {
//       true: "Yes",
//       false: "No"
//   },
//   correctAnswer: "Yes"
//     }
//   }
// ]
//
// submit.addEventListener('click', Questions)
//
// function showResults(){
//   const answerContainers = quizContainer.querySelectorAll('.answers');
//   let rightNum = 0;
//   Questions.forEach( ( currentQuestion, questionNumber) => {
//     const answerBox = answerContainer[questionNumber];
//     const selector = 'input[name=question' +questionNumber+']:checked';
//     const userAnswer = (answerBox.querySelector(selector) || {}).value;
//
//     if(userAnswer === currentQuestion.correctAnswer) {
//       print("Recommended: Bond Paper")
//       answerContainers[questionNumber].style.color = 'burlyWood'
//     } else {
//     }
//   });
// }


// let title = document.getElementsByClassName('title')
//
// title.addEventListener('mouseover', (e) => {
//   e.target.style.color = 'burlyWood'
// })
// title.addEventListener('mouseout', (e) => {
//   e.target.style.color = 'wheat'
// })

//let paragraph = document.getElementById('munder');
// munder.addEventListener('mouseover', (e) => {
//   e.target.style.border = '3px brown dotted';
// })
// paragraph.addEventListener('mouseout', (e) => {
//  e.target.style.border = '3px tan //dotted'
//})
