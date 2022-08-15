import React from 'react'
import style from './Img.module.css';



export default function Card({card : {img,title,desc}}) {
  return (
    <div className={style.images}>
        <img src={img} alt='' width="150px"/>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}
