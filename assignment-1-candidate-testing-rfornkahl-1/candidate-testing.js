const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ("");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = ("");
let questions = [ "Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? " ];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please provide your name: ");
console.clear();
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

let i=0;
while (i< questions.length){
  candidateAnswers.push(input.question(questions[i] + "\nYour Answer: "));
  
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  i++;
}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  answeredCorrect = (0);
  numberQuestions = (5);

  if (candidateAnswers[0].toUpperCase()===correctAnswers[0].toUpperCase()){
    answeredCorrect+=1;
  }
  if (candidateAnswers[1].toUpperCase()===correctAnswers[1].toUpperCase()){
    answeredCorrect+=1;
  }
  if (candidateAnswers[2].toUpperCase()===correctAnswers[2].toUpperCase()){
    answeredCorrect+=1;
  }
  if (candidateAnswers[3].toUpperCase()===correctAnswers[3].toUpperCase()){
    answeredCorrect+=1;
  }
  if (candidateAnswers[4].toUpperCase()===correctAnswers[4].toUpperCase()){
    answeredCorrect+=1;
  }
  let grade = answeredCorrect/numberQuestions*100;
  
  console.log(`>>> Overall Grade: ${grade}% (${answeredCorrect} of ${numberQuestions} responses correct) <<<`);
    if (grade >= 80){
      console.log(`>>> Status: PASSED <<<`);
    } else {
      console.log(`>>> Status: FAILED <<<\n`)
    }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Candidate Name: ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};




