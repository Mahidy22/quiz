import React, { useState } from 'react'
import Counter from './Counter'

export default function Hook() {

    let [toggler, setToggler] = useState(true);
    
    let togolbtn = ()=>{
        setToggler(!toggler)
    }

  return (
    <div>
        {
            toggler && <Counter />
        }
        <button onClick={togolbtn}>Togole</button>
    </div>
  )
}
