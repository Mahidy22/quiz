import React, { Component } from 'react'
import CheckEvenOdd from './CheckEvenOdd'

export default class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count : 0,
       gameOver : false
    }
  }


  increment = ()=>{
    if(this.state.count === 10){
       this.setState({
        gameOver : true
       })
    }else{
      this.setState((prevState) =>{
        return {
          count : prevState.count + 1
        }
      })
    }
  }


  decrement = ()=>{
    this.setState((prevState)=>{
      return{
        count : prevState.count - 1
      }
    })
  }

  reset = ()=>{
    this.setState({
      count : 0
    })
  }

  render() {

    let {count,gameOver} = this.state;

    return (
      <>
        Count : {count}

        <div>
        <button onClick={this.decrement} disabled={gameOver || count === 0}>-</button>
        <button onClick={this.increment} disabled={gameOver}>+</button>
        </div>

        <div>
          <CheckEvenOdd count={count} reset = {this.reset}/>
        </div>
      </>
    )
  }
}
