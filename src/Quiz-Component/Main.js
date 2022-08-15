import React, { useState } from 'react'
import QuestionCard from './QuestionCard';
import shuffle from './Utils'
import './QuizApp.css'
import ScoreCard from './ScoreCard';


export default function Main() {

 
  const [quizzes,setQuizzes] = useState(null);
  const [currentQsnIndex, setCurrentQsnIndex] = useState(0)
  const [loaded,setLoaded] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  const [currentAnswers, setCurrentAnswers] = useState(null);
  const [endGame, setEndGame]= useState(false)
  const [correctAns,setCorrectrAns] = useState(false)
  const [totalScore,setTotalScore] = useState(0)
  const [pickedAns, setPickedAns] = useState(null)



    const pickAnswer = (answer) =>{
      setPickedAns(answer)

      if(answer === correctAns){
         setTotalScore(prevScore => prevScore + 1)
      }
    }



  const navigateNext = () =>{

    let currentQuizIndex = currentQsnIndex + 1

    const validQsnIndex = currentQuizIndex < quizzes.length;

    if(validQsnIndex){
      setCurrentQsnIndex(currentQuizIndex);

      const question = quizzes[currentQuizIndex]
      setCurrentAnswers(shuffle(question));
      setPickedAns(null)
      setCorrectrAns(question.correct_answer)
    }else{
      setEndGame(true)
    }
  }



  const resetQuiz = () =>{
    setQuizzes(null)
    setLoaded(false)
    setCorrectrAns(null)
    setEndGame(false)
    setPickedAns(null)
    setTotalScore(0)
    setCurrentQsnIndex(0)
    setStartQuiz(false)
  }



  const fetchQuiz = async() =>{
    const response = await fetch('https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple');
    const {results} = await response.json();

    setQuizzes(results)
    setLoaded(true)
    setStartQuiz(true)

    const initialQuestion = results[currentQsnIndex]
    setCurrentAnswers(shuffle(initialQuestion));
    setCorrectrAns(initialQuestion.correct_answer)
  }


 

  return (
    <div >

    <div>
    {endGame && <ScoreCard totalScore={totalScore} resetQuiz={resetQuiz}/>}

    {!startQuiz && 
      <button onClick={fetchQuiz} className='startBtn'>Start Quiz</button>
    }
    </div>


    <div style={{maxWidth:'500px', margin:'auto'}}>
      {
          loaded && !endGame && <QuestionCard 
          quiz={quizzes[currentQsnIndex]} 
          currentAnswers={currentAnswers} 
          currentQsnIndex={currentQsnIndex}
          quizzes={quizzes}
          navigateNext={navigateNext}
          pickAnswer={pickAnswer}
          correctAns={correctAns}
          pickedAns={pickedAns}
          />
      }
    </div>

    </div>
  )
}
 

