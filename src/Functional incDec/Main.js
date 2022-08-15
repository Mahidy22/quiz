import React, { useState } from 'react'
import CardImg from './CardImg';
import IsEvenOdd from './IsEvenOdd'
import style from './Card.module.css';

export default function () {

    let [count,setCount] = useState(0);
    let [gameOver,setGameOver] = useState(false);

    const cardInfos = [
      {
        img : '/img/pexels-ahmad-syahrir-758744.jpg',
        title : 'Image - 1',
        desc : 'This is image - 1'
      },
      {
        img : '/img/pexels-ahmad-syahrir-758744.jpg',
        title : 'Image - 2',
        desc : 'This is image - 2'
      },
      {
        img : '/img/pexels-ahmad-syahrir-758744.jpg',
        title : 'Image - 3',
        desc : 'This is image - 3'
      },

    ]

    const increment = ()=>{
        if(count === 10){
            setGameOver(true)
        }else{
            setCount((prevState)=> prevState + 1)
        }
    }

    const decrement = ()=>{
            setCount((prevState)=> prevState - 1)
    }


    const reset = ()=>{
        setCount(0);
        setGameOver(false)
    }


  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={decrement} disabled={gameOver || count === 0} >-</button>
      <button onClick={increment} disabled={gameOver}>+</button>

      <IsEvenOdd count={count} reset={reset} gameOver={gameOver}/>


     <div>
      {cardInfos.map((card,i)=>(
        <CardImg key={i} card={card}/>
      ))}
     </div>

    </div>
  )
}
