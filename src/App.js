import React, { Component } from 'react';
import './App.css';
import './animate.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="main">
        <div className="intro">
          <h1 className="title animated fadeInUp">Hi.</h1>
          <h2 className="name animated fadeInUpBig">I'm Ben</h2>
        </div>
  
        <div className="bio">
          <img className="logo" src="./assets/images/logo.png" alt="logo" />
          <p>I'm a MERN stack developer based out of Los Angeles, CA. A passionate, problem solving web developer who values the listening aspect of communication as much as conversing. Loves design because of the opportunity to dissect items and reassemble for everyone's benefit. Lifetime learner and ready to help others make something great.</p>
        </div>
      </div>


      </div>
    );
  }
}

export default App;
