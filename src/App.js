import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='grid-container'>
        <span className='result'>result</span>
        <div className='clear'>clear</div>
        <div className='operator'><i className="fas fa-divide"></i></div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div className='operator'><i className="fas fa-plus"></i></div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div className='operator'><i className="fas fa-minus"></i></div>
        <div>1</div>
        <div>2</div>
        <div>3</div> 
        <div className='operator'><i className="fas fa-equals"></i></div>
      </div>
    );
  }
}

export default App;
