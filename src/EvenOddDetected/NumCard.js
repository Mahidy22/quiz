import React from 'react'
import style from './NumCard.module.css';


export default function NumCard({num,setPickedNum}) {

   
  return (

    <div className={style.num} onClick={()=>setPickedNum(num)}>
        {num}
    </div>
  )
}
