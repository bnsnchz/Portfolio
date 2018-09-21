import React, { Component } from 'react';
import './App.css';
import './animate.css'
import Background from "./wp.gif"

/* eslint-disable */

var wallPaper = {
  backgroundPosition: "center top",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat"
}

class App extends Component {

  componentDidMount() {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="intro" style={wallPaper}>
            <h1 className="title animated fadeInDown">Hi.</h1>
            <h2 className="name animated fadeInDownBig">I'm Ben</h2>
          </div>
          <div className="bio">
            <img className="logo" src="./assets/images/logo.png" alt="logo" />
            <p className="bioText">I’m a MERN stack developer based out of Los Angeles, CA. I’m passionate, problem solving web developer who values the listening aspect of communication as much as conversing. I love design because of the opportunity to dissect items and reassemble for everyone's benefit. I’m a lifetime learner and ready to help others make something great.</p>
          </div>
          <div className="modal fade" id="resume" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <h3 className="resumeName">Ben Sanchez</h3>
                  <p className="resumeInfo"><a href="mailto:bnsnchzdev@gmail.com?Subject=Job%20Inquiry">bnsnchzdev@gmail.com</a> | 951-990-2607 | Los Angeles, California</p>
                  <p className="resumeLinks"><a href="https://www.linkedin.com/in/bnsnchz/" target="_blank" ><u>LinkedIn</u></a> | <a href="https://github.com/bnsnchz" target="_blank" ><u>GitHub</u></a></p>

                  <p><b><u>OBJECTIVE</u></b></p>
                  <p>Entry-level full-time position in web development, with a special interest in Front-end React.js development.</p> 
                  <p><b><u>TECHNICAL SKILLS</u></b></p>
                  <p>React.js, Node.Js, Express, JavaScript, jQuery, React Native, GIT, Github, MongoDB, MySQL, Firebase, HTML, CSS, Bootstrap, Media Queries, APIs, JSON, REST, AJAX, the command line, computer science fundamentals, writing tests.</p>
                  <p><b><u>PROJECTS</u></b></p>
                  <ul>
                    <p><b><u>Ethr</u></b><br/>
                    <a href="https://ethr.herokuapp.com" target="_blank"><u>Live Site</u></a> <a href="https://github.com/bnsnchz/ethr" target="_blank"><u>GitHub</u></a> </p> 
                  <li>Review website centered on video games, allowing a user to create an account and post reviews.</li> 
                  <li>Main front end JS, and Handlebars and MYSQL developer in group of 4 on 1-week deadline.</li>
                  <li>Built MYSQL database to save user data and review posts.</li>
                  </ul>
                  <ul>
                    <p><b><u>Look & Cook</u></b><br/>
                    <a href="https://lookncook.herokuapp.com" target="_blank"><u>Live Site</u></a>  <a href="https://github.com/bnsnchz/lookncook" target="_blank"><u>GitHub</u></a>
                    </p>
                  <li>React based interactive recipe website.</li>
                  <li>Lead developer in group of 4 working in full MERN stack app on 1-week deadline.</li>
                  <li>Created and maintained React components and Mongo Database.</li>
                  <li>In charge of all CSS and REGEX formulas for timer and form submit functionality.</li>
                  </ul>
                  <p><b>EXPERIENCE</b></p> 
                  <p><b><u>Lifetouch National School Studios</u></b></p>                                          <p>6/2011-4/2018</p>
                  <ul>
                    <p><b><u>Studio Lead/Photographer</u></b></p>
                  <li>Worked as a photographer and studio manager for the flagship studio.</li>
                  <li>Trained and oversaw new hires and executed daily quality checks.</li>
                  <li>Led studio to receive Platinum Certification two years in a row, seeing 100+ sitting increase annually.</li>
                  </ul>
                  <p><b><u>EDUCATION</u></b></p> 
                    <p><b><u>University of California Los Angeles</u></b></p>                                     <p>5/2018-8/2018</p>
                  <p><b>UCLA Boot Camp</b></p> 
                  <p>An intensive 12-week long boot camp dedicated to designing and building web applications. Skills learned consisted of HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handlebars JS, & React Js. 
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="tech">
            <div className="techDesc">
              <h3 className="techDescHeader"><u>I program Using:</u></h3>
            </div>
            <div className="techImages">
              <div className="techImgDiv">
                <img src="./assets/images/html.png" className="techImg" alt="HTML" />
              </div> 
              <div className="techImgDiv">
                <img src="./assets/images/bootstrap.png" className="techImg" alt="Bootstrap" />
              </div>
              <div className="techImgDiv">
                <img src="./assets/images/css.png" className="techImg" alt="CSS" />
              </div>
              <div className="techImgDiv">
                <img src="./assets/images/js.jpg" className="techImg" alt="JS" />
              </div>
              <div className="techImgDiv">
                <img src="./assets/images/react.png" className="techImg" alt="React" />
              </div>   
              <div className="techImgDiv">
                <img src="./assets/images/node.png" className="techImg" alt="Node" />
              </div>          
              <div className="techImgDiv">
                <img src="./assets/images/git.png" className="techImg" alt="GIT" />
              </div>                                      
              <div className="techImgDiv">
                <img src="./assets/images/mongo.png" className="techImg" alt="Mongo" />
              </div>              
              <div className="techImgDiv">
                <img src="./assets/images/mysql.png" className="techImg" alt="MySQL" />
              </div>
            </div>
          </div>
          <div className="Projects">
            <h2 className="projectTitle"><u>These are some of the projects I've contributed to:</u></h2>
              <div className="project">
                <img className="projImg" src="./assets/images/ethr.png" alt="ethr" />
                  <ul className="projDesc">
                    <h3><b><u>Ethr</u></b><br/>
                    <a href="https://ethr.herokuapp.com" target="_blank"><u>Live Site</u></a> <a href="https://github.com/bnsnchz/ethr" target="_blank"><u>GitHub</u></a> </h3> 
                  <li>Review website centered on video games, allowing a user to create an account and post reviews.</li> 
                  <li>Main front end JS, and Handlebars and MYSQL developer in group of 4 on 1-week deadline.</li>
                  <li>Built MYSQL database to save user data and review posts.</li>
                  </ul>
              </div>
              <div className="project">
                <img className="projImg" src="./assets/images/lookncook.png" alt="lookncook" />
                <ul className="projDesc">
                    <h3><b><u>Look & Cook</u></b><br/>
                    <a href="https://lookncook.herokuapp.com" target="_blank"><u>Live Site</u></a>  <a href="https://github.com/bnsnchz/lookncook" target="_blank"><u>GitHub</u></a>
                    </h3>
                  <li>React based interactive recipe website.</li>
                  <li>Lead developer in group of 4 working in full MERN stack app on 1-week deadline.</li>
                  <li>Created and maintained React components and Mongo Database.</li>
                  <li>In charge of all CSS and REGEX formulas for timer and form submit functionality.</li>
                </ul>
              </div>

          </div>
        </div>
        <footer className="footer">
          <p className="footer1">2018 Ben Sanchez</p>
          <p className="footer2">Connect With Me:</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/bnsnchz/"><img title="LinkedIn" className="linkedIn" src="./assets/images/LinkedIn.png" alt="LinkedIn" /></a>
            <a href="https://github.com/bnsnchz"><img title="GitHub" className="gitHub" src="./assets/images/GitHub.png" alt="Github" /></a>
            <a href="mailto:bnsnchzdev@gmail.com?Subject=Job%20Inquiry"><img title="E-Mail" className="mail" src="./assets/images/Mail.png" alt="mail" /></a>
            <img title="Resume" className="resume" data-toggle="modal" data-target="#resume" src="./assets/images/Resume.png" alt="Resume" />
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
