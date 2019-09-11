import React from 'react';
//import { Link } from "react-router-dom";
import "./style.css";
import Button from "../Button"

let buttonGithub="Click Here";
let buttonLink = "window.location.href='https://github.com/kayleighs/Google-Books-Search'"
class Jumbotron extends React.Component {
  state = {
  buttonGithub,
  buttonLink
  }
gohome =() => {
  window.location.href = 'https://github.com/kayleighs/Google-Books-Search';
}
  render(){
    return (
      <div className="jumbotron text-center">
        <h1 className="display-4">(React) Google Books Search</h1>
        <p className="lead">Search and Save Books of Interest</p>
        <hr className="my-4"></hr>
        <p>Click below to see it on github</p>
        <div className="lead">
          <a href="https://github.com/kayleighs/Google-Books-Search">
            <Button buttonMessage={buttonGithub}>
            </Button>
          </a>

        </div>
      </div>
    );
  }
}

export default Jumbotron
