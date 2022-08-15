import React from 'react'
import AnswerCard from './AnswerCard';
import './QuizApp.css'

export default function QuestionCard(props) {
    let {quiz,currentAnswers, currentQsnIndex,quizzes,navigateNext,pickAnswer, correctAns, pickedAns} = props;
     
  return (
   
    <div className='container' >
      <p style={{fontWeight:'bold', marginBottom:'30px', color:'white'}}>Question: <span style={{color:'crimson'}}>{currentQsnIndex + 1}</span> / <span style={{color:'crimson'}}>{quizzes.length}</span> </p>

        <h4 style={{color:'crimson', marginBottom: '25px'}}>{quiz.question}</h4>

        {currentAnswers.map((answer, index) => (<AnswerCard 
         key={index}
         answer={answer} 
         pickAnswer={pickAnswer}
         pickedAns={pickedAns}
         correctAns={correctAns}
        />))}

        <button onClick={navigateNext} className='nextbtn'>Next</button>
    </div>

  )
}
