import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react'
import EvenOdd from './EvenOdd';
import NumCard from './NumCard';
import style from './NumCard.module.css'
export default function Main() {

    let numbers = [10,19,12,39]
    let [pickedNum, setPickedNum] = useState(null);


  return (
    <div className={style.container}>
        {numbers.map((num, i)=>{
            return (
                <NumCard key={i} num={num} setPickedNum={setPickedNum}/>
            )
        })}

        <EvenOdd pickedNum={pickedNum}/>
    </div>
  )
}
