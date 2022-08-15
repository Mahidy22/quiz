import React from 'react'
import './QuizApp.css'


export default function AnswerCard({answer,pickAnswer,correctAns, pickedAns}) {
    
  const isRightAnswer = pickedAns && answer === correctAns;

  const isWrongAnswer = pickedAns &&  answer && pickedAns && pickedAns !== correctAns
  const correctClass = isRightAnswer ? 'correct-answer' : ''
  const wrongClass = isWrongAnswer ? 'incorrect-answer' : ''
  const disabledClass = pickedAns && 'disabled-answer'
   

  return (
    <div >
      <h5 
      className={`answer ${correctClass} ${wrongClass} ${disabledClass}`} 
      onClick={()=>pickAnswer(answer)}>{answer}
      </h5>

    </div>
  )
}
