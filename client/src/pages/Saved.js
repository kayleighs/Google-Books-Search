import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron"
import BookCards from "../components/BookCards"
import API from "../utils/API";
//import Wrapper from "../components/Wrapper"
//import Button from "../components/Button"

let buttonMessage = "Delete"
class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      buttonMessage,
    }
  }


/*     id:"",
    title: "",
    author: [],
    description: "",
    image: "",
    link: "", */

  componentDidMount() {
    this.loadBooks();


  }
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data})
      )
      .catch(err => console.log(err));
  };
  deleteBook = id => {
    console.log("clicked")
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };
/*   deleteBook = id => {
    console.log("clicked")
    // Filter this.state.books for books with an id not equal to the id being removed
    const books = this.state.books.filter(book => book._id !== id);
    // Set this.state.books equal to the new books array
    this.setState({ books });

    API.deleteBook(id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }; */

  render() {
    return (
      <div>
        <Jumbotron />
        <div className="container-fluid">
          <div className="row justify-content-center">
            {this.state.books.map(books => (
              <BookCards
                key={books._id}
                id={books._id}
                title={books.title}
                author={books.author}
                description={books.description}
                image={books.image}
                link={books.link}
                buttonMessage={buttonMessage}
                buttonClick={() => this.deleteBook(books._id)}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Saved;