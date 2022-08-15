import React from 'react'
import './QuizApp.css'


export default function ScoreCard({totalScore,resetQuiz}) {
  return (
    <div style={{
        maxWidth:'500px',
        background:'crimson',
        margin:'auto',
        textAlign:'center',
        borderRadius:'8px',
        padding:'20px',
        fontFamily:'monospace',
        marginTop:'200px'}}>


        <h3 style={{color:'white'}}>Result Page</h3>
        <p style={{fontWeight:'bold'}}>Score  : <span style={{color:'white'}}>{totalScore}</span></p>
        <button onClick={resetQuiz} className='restartBtn'>Reset Quiz</button>
    </div>
  )
}
