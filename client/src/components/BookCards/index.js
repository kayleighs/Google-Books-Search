import React from 'react';
import "./style.css";
import Button from "../Button"



class BookCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render (){
    return (
  <div className="col-lg-5 border ks-com-container ks-container-fit m-4 biggerBox" id="fpc_box">
          <div className="" id="fpc_content">
            <section className="p-4">
              <div className= "img-wrap">
                  <img className="image pb-4 pr-4 float-left" src={ this.props.image } alt={this.props.title}></img>
                </div>
              <section className="text-center">
                <h4 className="h-font title-article-name ">{this.props.title }</h4>
                <p className="title-article-name">{ this.props.description }
                </p>
                <br></br>
                  <div className="position-absolute bottom-right ">
                <Button buttonClick={this.props.buttonClick} id={this.props.id} className="ks-button save-btn" buttonMessage={this.props.buttonMessage}></Button>
                  </div>
                </section>
              </section>
              <div id="fpc_corner-box">
                <a id="fpc_page-tip" href={ this.props.link } target="_blank" rel="noopener noreferrer">
                  <div id="fpc_corner-contents">
                    <div id="fpc_corner-button"><strong>Book Link</strong></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
    )
  }
}

export default BookCards