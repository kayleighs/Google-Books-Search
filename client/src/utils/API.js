import axios from "axios";
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001'
});
export default {
  //Google api search
  getGoogleBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  },
  // Gets all books
  getBooks: function () {
    return axiosInstance.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axiosInstance.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axiosInstance.post("/api/books", bookData);
  }
};
