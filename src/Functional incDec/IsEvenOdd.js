import React from 'react'

export default function IsEvenOdd({count,reset,gameOver}) {

    let evenOdd = count % 2 === 0? <span style={{color:'springgreen'}}>Even</span> : <span style={{color:'crimson'}}>Odd</span>

    const resetBtn = ()=>{
        reset()
    }


  return (
    <div>
        <h3>
            {count}  is {evenOdd}
        </h3>

        <div>
            {gameOver &&  <h3>Game Over!!</h3>}
        </div>
        

        <button onClick={resetBtn}>Reset</button>
    </div>
  )
}
 