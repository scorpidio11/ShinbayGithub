import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem, ScreenBtn, PrintBtn, EmailBtn, TwBtn } from "../components/List";
import { Input, TextArea, FormBtn} from "../components/Form"
import Nav from "../components/Nav";

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
          <Nav> </Nav> 
          <br/>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Menu</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Name (required)"
              />
              <TextArea
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Description (required)"
              />
           
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Menu
              </FormBtn>
            </form>
<br/><br/>
            <Jumbotron>
              <h1>Menu List</h1>
            </Jumbotron>

            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    {/* <Link to={"/books/" + book._id}> */}
                      <strong>
                        {book.title} 
                      </strong>
                      <p>
                      {book.author}
                      </p>
                    {/* </Link> */}
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <p>No Results to Display</p>
            )}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Menu Preview</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                   
                      <strong>
                        {book.title} 
                      </strong>
                      <p>
                      {book.author}
                      </p>
                  
                  </ListItem>
                ))}
              </List>
              
            ) : (
              <p>No Results to Display</p>

            )}

                
<Link to={"/menu"}> 
<ScreenBtn>
Screen View
</ScreenBtn>            
</Link> 

<Link to={"/menuprint"}> 
<PrintBtn>
Print 
</PrintBtn>
</Link>
  
<EmailBtn>
Send Email
</EmailBtn>

<TwBtn>
Send SMS
</TwBtn >
</Col>
          
</Row>
</Container>
    );
  }
}

export default Books;
