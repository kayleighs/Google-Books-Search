import axios from "axios";
//Use below to test server locally, replace axios below with axiosInstance, also I used Chrome extension, allow-control-allow-origin
/* const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001'
}); */
export default {
  //Google api search
  getGoogleBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
