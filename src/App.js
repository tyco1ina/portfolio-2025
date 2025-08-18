import logo from './logo.svg';
import './App.css';

import getModal from "./modals"

document.body.style = 'background: #DDD0C7;';

function App() {
  return (
    <div className="App">
      <div className="intro-section">
        <div className="intro-section-half" id="intro-section-left">
          <h1>Tiberius Colina</h1>
          <p>Computer Science @ Georgia Tech</p>
          <div class="btn-group" role="group" aria-label="ConnectButtons">
            <button type="button" class="btn btn-secondary" onClick={() => window.open('https://www.linkedin.com/in/tcolina/', '_blank')}>LinkedIn</button>
          </div>
        </div>
        <div className="intro-section-half" id="intro-section-right">
          <div className="profile-picture"></div>
        </div>
      </div>

      <div className="experience-section">
        <h1>My Experiences</h1>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Intro to Databases</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Teaching Assistant</h6>
            <p class="card-text">Creating and managing 40+ in-class quizzes covering database design and SQL used by the 600+ students of the course.</p>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-TA">Read More</button>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Amazon</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">SDE Intern</h6>
            <p class="card-text">Worked with AWS and React.js as a Software Development Engineer Intern in Amazon S3.<br/><br/></p>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-amazon">Read More</button>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Capital One</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Software Engineering Intern</h6>
            <p class="card-text">Developed foundational components for enterprise-grade automation of Jira issues, leveraging AWS, Slack, and Python.</p>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-C1">Read More</button>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">DBNOSTIX LLC</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Software Development Intern</h6>
            <p class="card-text">Developed tool that processes 500+ companies’ market info by designing, proposing and implementing AWS solution.</p>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-dbnostix">Read More</button>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Portfolio Website</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">Project</h6>
            <p class="card-text">Created portfolio website to introduce myself and show my experiences in cloud computing and software development.</p>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-portfolio">Read More</button>
          </div>
        </div>
      </div>

      {getModal("TA")}
      {getModal("capitalOne")}
      {getModal("dbnostix")}
      {getModal("portfolio")}
      {getModal("amazon")}


    </div>
  );
}

export default App;
