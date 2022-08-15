import React from 'react'

export default function EvenOdd({pickedNum}) {

    let isEvneOdd = pickedNum % 2 === 0? 
    <h3 style={{color:'white'}}><span style={{color:'springgreen'}}>{pickedNum}</span> <span style={{margin:'10px'}}>is</span> <span style={{color:'springgreen'}}>Even</span> </h3>
    :<h3 style={{color:'white'}}><span style={{color:'crimson'}}>{pickedNum}</span> <span style={{margin:'10px'}}>is</span> <span style={{color:'crimson'}}>Odd</span> </h3>


  return (
    <div>
        {
            pickedNum  ? isEvneOdd : <h3 style={{color:'white'}}>You haven't picked any no yet !! </h3>
        }
    </div>
  )
}
