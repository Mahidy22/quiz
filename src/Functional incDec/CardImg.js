import React from 'react'
import style from './Card.module.css'

export default function CardImg({card : {img,title,desc}}) {
  return (

    <div>
    <div className={style.card}>
        <img src={img} alt='logo' style={{width:'150px'}}/>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
    </div>
  )
}
