import React, { Component } from 'react';
import './App.css';
import './animate.css'
import Background from "./wp.gif"

var wallPaper = {
  backgroundPosition:"center top",
  backgroundImage:`url(${Background})`,
  backgroundRepeat:"no-repeat"
}

class App extends Component {

componentDidMount(){
  window.onbeforeunload = () => {
  window.scrollTo(0, 0);
  }
}

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="intro"style={wallPaper}>
            <h1 className="title animated fadeInDown">Hi.</h1>
            <h2 className="name animated fadeInDownBig">I'm Ben</h2>
          </div>
          <div className="bio">
            <img className="logo" src="./assets/images/logo.png" alt="logo" />
            <p className="bioText">I'm a MERN stack developer based out of Los Angeles, CA. A passionate, problem solving web developer who values the listening aspect of communication as much as conversing. Loves design because of the opportunity to dissect items and reassemble for everyone's benefit. Lifetime learner and ready to help others make something great.</p>
          </div>
        </div>
        <footer className="footer">
          <p className="footer1">2018 Ben Sanchez</p>
          <br/>
          <p className="footer2">Connect With Me:</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/bnsnchz/"><img className="linkedIn" src="./assets/images/LinkedIn.png" alt="LinkedIn"/></a>
            <a href="https://github.com/bnsnchz"><img className="gitHub" src="./assets/images/GitHub.png" alt="Github"/></a>
            <a href="mailto:bnsnchzdev@gmail.com?Subject=Job%20Inquiry"><img className="mail" src="./assets/images/Mail.png" alt="mail" /></a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
