import React, {useEffect, useState} from 'react'

export default function Counter() {

    let [count, setCount] = useState(0);


    useEffect(()=>{
        console.log('hello from life cycle hook',count)
    }, [count])

    let inc = () =>{
        setCount((prevState)=> prevState + 1)
    }

    let dec = () =>{
        setCount((prevState)=> prevState - 1)
    }

    let reset = () =>{
        setCount(0)
    }


  return (
    <div>
        count : {count}
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
