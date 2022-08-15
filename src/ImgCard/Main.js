import React from 'react'
import Card from './Card'
import style from './Img.module.css';


export default function Main() {

    let imageInfo = [
        {
            img:'/img/pexels-ahmad-syahrir-758744.jpg',
            title : 'Image - 01',
            desc : 'This is image - 01'
        },
        {
            img : '/img/pexels-ahmad-syahrir-758744.jpg',
            title : 'Image - 02 ',
            desc : 'This is image - 02'
        }
    ]


  return (
    <div className={style.card}>
        {imageInfo.map((card, i)=>{
            return (
                <Card key={i} card={card}/>
            )
        })}

    </div>
  )
}
