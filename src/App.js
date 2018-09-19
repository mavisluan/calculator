import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='display'>result</div>
        <div className='input'>
          <div className='left'>
            <div style={{ width: '300px', height: '100px', color: 'gray'}}>clear</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className='right'>
            <div><i className="fas fa-divide"></i></div>
            <div><i className="fas fa-plus"></i></div>
            <div><i className="fas fa-minus"></i></div>
            <div><i className="fas fa-equals"></i></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
