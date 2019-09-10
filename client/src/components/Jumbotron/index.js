import React from 'react';
//import { Link } from "react-router-dom";
import "./style.css";
import Button from "../Button"

let buttonGithub="Click Here";
let buttonLink ="/"
class Jumbotron extends React.Component {
  state = {
  buttonGithub
  }

  render(){
    return (
      <div className="jumbotron text-center">
        <h1 className="display-4">(React) Google Books Search</h1>
        <p className="lead">Search and Save Books of Interest</p>
        <hr className="my-4"></hr>
        <p>Click below to see it on github</p>
        <div className="lead">
          <Button buttonLink={buttonLink} buttonMessage={buttonGithub}/>
        </div>
      </div>
    );
  }
}

export default Jumbotron
