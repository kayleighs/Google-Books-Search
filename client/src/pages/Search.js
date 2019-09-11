import React from "react";
import Jumbotron from "../components/Jumbotron"
import SearchBar from "../components/SearchBar"
import Wrapper from "../components/Wrapper"
import BookCards from "../components/BookCards"
import API from "../utils/API";

import { ToastContainer } from "react-toastr";

//import Button from "../components/Button"

let buttonSave ="Save"
let container;
class Search extends React.Component {

  state = {
    search: "",
    books: [],
    message:"",
    buttonSave
  };
  handleInputChange = event => {
    const {  value } = event.target;
    this.setState({
      search: value
    });
  };
  handleSearchBooks = event => {
    event.preventDefault();
    console.log("searched for " + this.state.search)
    API.getGoogleBooks(this.state.search)
      .then(res => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        }
        else {
          //console.log(res)
          // let results equal the array of items
          let results = res.data.items
          //map through the array 
          results = results.map(result => {
            //store each book information as a new object 
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              author: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink
            }
            //console.log(result)
            return result;
          })
          // reset the state of the empty books array to the new arrays of objects with properties geting back from the response
          this.setState({ books: results, error: "" })
        }
      })
      .catch(err => this.setState({ error: err.items }));
  }
  handleSavedButton = event => {
    //console.log("clicked")
    // console.log(event)
    event.preventDefault();
    //console.log(this.state.books)
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    savedBooks = savedBooks[0];
    //console.log(savedBooks)
    API.saveBook(savedBooks)
      //.then(this.setState({ message: console.log("Your book is saved") }))
      /* .then(container.success(`hi! Now is ${new Date()}`, `///title\\\\\\`, {
        closeButton: true,
      })) */
      .catch(err => console.log(err))
/*     container.success(`Book saved at ${new Date()}`, `Success!`, { */
    container.success(`Book saved!`, `Success!`, {
      closeButton: true,
    })
  };
  
  render() {
    return (
      
      <div>      
        <ToastContainer
          ref={ref => container = ref}
          className="toast-bottom-right"
        />
        <Jumbotron/>
        <Wrapper>
          <SearchBar 
          search={this.search}
          handleInputChange={this.handleInputChange}
          handleSearchBooks={this.handleSearchBooks}
          />
        </Wrapper>
        <div className="container-fluid">
          <div className="row justify-content-center">
        {this.state.books.map(books => (
          <BookCards 
          key= {books.key}
          id= {books.id}
          title= {books.title}
          author= {books.author}
          description= {books.description}
          image= {books.image}
          link= {books.link}
          buttonClick={this.handleSavedButton}
          buttonMessage={buttonSave}
          />
          ))}
          </div>
        </div>
        </div>

    )
  }
}



export default Search;