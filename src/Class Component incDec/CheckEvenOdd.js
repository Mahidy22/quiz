import React, { Component } from 'react'

export default class CheckEvenOdd extends Component {

    resetBtn = ()=>{
        let {reset} = this.props;
        reset();
    }


  render() {

    let {count} = this.props;
    let evenOdd = count % 2 === 0 ? 
    <h4><span style={{color:'springgreen'}}>{count}</span> is <span style={{color:'springgreen'}}>Even</span> </h4>
    :<h4><span style={{color:'crimson'}}>{count}</span> is <span style={{color:'crimson'}}>Odd</span> </h4>
    
    
    return (
      <div>
        {
            evenOdd
        }

        <button onClick={this.resetBtn}>Reset</button>
      </div>
    )
  }
}
