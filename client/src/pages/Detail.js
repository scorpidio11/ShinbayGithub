


import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { FinalList, FinalListItem, } from "../components/FinalList";
import Footer from "../components/Footer";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
//     synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
//         synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
   
        <Col size="md-12">
      
            {this.state.books.length ? (
              <FinalList>
                {this.state.books.map(book => (
                  <FinalListItem key={book._id}>
                
                      <strong>
                        {book.title} 
                      </strong>
                      <p>
                      {book.author}
                      </p>
                   
                  </FinalListItem>
                ))}
                   <Footer>
            </Footer>  
              </FinalList>
              
            ) : (
            <p>No Results to Display</p>

            )}

          </Col>
      
        </Row>
    
      </Container>
      
    );
  }
}

export default Books;


{/* <Link to="/">← Back to Authors</Link> */}