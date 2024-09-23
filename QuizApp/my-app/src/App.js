import logo from './logo.svg';
import './App.css';
import questions from "./constants/questions.json"
import { useState } from 'react';
import Question from './components/question';
import Result from './components/Result';

function App() {
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [userAnswers,setUserAnswers]=useState([]);
  const handleNextQuestion=(isCorrect)=>{
  setCurrentQuestion(currentQuestion+1);
  setUserAnswers([...userAnswers,isCorrect]);
  }
  const resetQuiz=()=>{

  }
  return (
    <div className="App">
      <h1>World Quiz</h1>
      {currentQuestion<questions.length && (
      <Question question={questions[currentQuestion]} onAnswerClick={handleNextQuestion}/>)}
      {
      currentQuestion===questions.length && (
      <Result userAnswers={userAnswers} questions={questions} resetQuiz={resetQuiz}/>)}
    </div>
  );
}

export default App;
