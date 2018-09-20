import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    input: [ ],
    oldNum: 0,
    newNum: 0,
    operator: null
  }

  updateNumber = ( number ) => {
    const input = [ ...this.state.input, number ]
    this.setState({ 
      input,
      newNum: Number(input.join('')),
    })
  }

  updateOperator = ( operator ) => {
    this.setState(state => {
      const oldNum = state.newNum
      const input = []
      return ({ input, oldNum, operator })
    })  
  }
  
  clearInput = () => this.setState({ input: [], newNum: 0 })
  
  calculateResult = ( ) => {
    const { operator, oldNum, newNum } = this.state
    switch(operator) {
      case '+':
        return this.setState({ newNum: oldNum + newNum })
      case '-':
        return this.setState({ newNum: oldNum - newNum })
      case '*':
        return this.setState({ newNum: oldNum * newNum })
      case '/':
        return this.setState({ newNum: oldNum / newNum })
      default:
      return this.state.newNum
    } 
  }

  render() {
    return (
      <div className='grid-container'>
        <span className='result'>{this.state.newNum}</span>
        <div 
          className='big-button' 
          onClick={() => this.clearInput()}
        >
          AC
        </div>
        <div 
          className='operator'
          onClick={() => this.updateOperator('+')}
        >
          <i className="fas fa-plus"></i>
        </div>
        <div onClick={() => this.updateNumber('7')}>7</div>
        <div onClick={() => this.updateNumber('8')}>8</div>
        <div onClick={() => this.updateNumber('9')}>9</div>
        <div 
          className='operator'
          onClick={() => this.updateOperator('-')}
        >
          <i className="fas fa-minus"></i>
        </div>
        <div onClick={() => this.updateNumber('4')}>4</div>
        <div onClick={() => this.updateNumber('5')}>5</div>
        <div onClick={() => this.updateNumber('6')}>6</div>
        <div 
          className='operator'
          onClick={() => this.updateOperator('*')}
        >
          <i className="fas fa-times"></i>
        </div>
        <div onClick={() => this.updateNumber('1')}>1</div>
        <div onClick={() => this.updateNumber('2')}>2</div>
        <div onClick={() => this.updateNumber('3')}>3</div> 
        <div 
          className='operator'
          onClick={() => this.updateOperator('/')}
        >
          <i className="fas fa-divide"></i>
        </div>
        <div className='big-button' onClick={() => this.updateNumber('0')}>0</div>
        <div 
          className='operator'
          onClick={() => this.calculateResult()}
        >
          <i className="fas fa-equals"></i>
        </div>
      </div>
    );
  }
}

export default App;
