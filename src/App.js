import "./App.css";
import React from "react";
import azaman2 from "./azaman2.jpg";
function App() {
  const dawnload = () => {
    alert("/");
  };
  const hireMe = () => {
    alert(
      "Efficient professional with experience and proven knowledge of application  and web platform development. Aiming to leverage my skills to successfully fill the Front-End  Engineer role at your company"
    );
  };
  const Amazone = () => {
    alert(
      "Expreinece in Web application development,React,Html,Css,Javascrpit,Web API"
    );
  };

  return (
    <div className="Arizona">
      <h2>MY CV </h2>
      <button className="btn" onClick={dawnload}>
        Dawnload
      </button>
      <h4> Work Experience Education Skills Hubbies</h4>
      <img className="azaman" src={azaman2} width="130" height="150" alt="kc" />

      <p className="play">
        Holle Iam Kelechi Jonathan Okeh i work as interface <br></br>
        and front end developer, i have passion for pixe .
      </p>
      <button className="btn1" onClick={hireMe}>
        HireME
      </button>
      <div className="experience">
        <h3>Work Experience</h3>
        <p>
          With a passion for coding and a good background in web development, I
          am confident in my ability to make a meaningful contribution to your
          team. My experience includes proficiency in HTML, CSS, and JavaScript,
          as well as various front end frameworks such as React.js, Github, API,
          POSTMAN, FIGMA ➢ IDE: Visual Studio, Visual Studio Code . I have
          worked on a variety of web development projects, including e-commerce
          sites, user authentication page and interactive web applications,
          Developed a Loan Application.Throughout my career, I have been praised
          for my attention to detail, my ability to collaborate with
          cross-functional teams, and my problem-solving skills. One of my
          recent projects involved building a responsive web application , user
          authentication page, worked closely with the client to understand
          their requirements and delivered a user-friendly platform that met
          their needs. The feedback from the client and the end-users was
          overwhelmingly positive, which was a testament to the hard work and
          dedication that I put into the project. I am eager to continue honing
          my skills as a Front End Developer and contributing to innovative
          projects. I am confident that my technical expertise, combined with my
          strong work ethic and collaborative spirit, will make me a valuable
          member of your team. Thank you for considering my application. I look
          forward to discussing my qualifications further in an interview.
        </p>
      </div>

      <h6>
        Goal oriented and self-motivated software developer,spicalist in
        front-end<br></br>
        seeking to work in an organization where my knowledge and skill will be
        effective utilized.
      </h6>
    </div>
  );
}

export default App;
