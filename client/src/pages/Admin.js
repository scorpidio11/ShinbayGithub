import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import EditBtn from "../components/EditBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem, ScreenBtn, PrintBtn, EmailBtn, TwBtn } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form"
import Nav from "../components/Nav";

class Admin extends Component {
  state = {
    _id: '', //shindata id 
    shinbay: [],
    title: "",
    description: "",
    //     synopsis: ""
  };

  componentDidMount() {
    this.loadAdmin();
  }

  loadAdmin = () => {
    API.getAdmin()
      .then(res =>
        this.setState({ shinbay: res.data, title: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteShindata = id => {
    API.deleteShindata(id)
      .then(res => this.loadAdmin())
      .catch(err => console.log(err));
  };

  showEditShindata = (id, title, description) => {
    this.setState({ _id: id, title: title, description: description });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { title, description, _id } = this.state;
    if (title && description && _id) {
      let shindataData = {
        _id,
        title,
        description,
      }
      API.editShindata(shindataData)
        .then(res => this.loadAdmin())
        .catch(err => console.log(err));
        this.setState({_id: ''})
    } else {
      API.saveShindata({
        title: this.state.title,
        description: this.state.description,
        //         synopsis: this.state.synopsis
      })
        .then(res => this.loadAdmin())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (

      <Container fluid>
        <Nav> </Nav>
        <br />
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
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />

              <FormBtn
                disabled={!(this.state.description && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Menu
              </FormBtn>
            </form>
            <br /><br />
            <Jumbotron>
              <h1>Menu List</h1>
            </Jumbotron>

            {this.state.shinbay.length ? (
              <List>
                {this.state.shinbay.map(shindata => (
                  <ListItem key={shindata._id}>
                    {/* <Link to={"/shinbay/" + shindata._id}> */}
                    <strong>
                      {shindata.title}
                    </strong>
                    <p>
                      {shindata.description}
                    </p>
                    {/* </Link> */}
                    <DeleteBtn onClick={() => this.deleteShindata(shindata._id)} />
                    <EditBtn onClick={() => this.showEditShindata(shindata._id, shindata.title, shindata.description)} />
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
            {this.state.shinbay.length ? (
              <List>
                {this.state.shinbay.map(shindata => (
                  <ListItem key={shindata._id}>

                    <strong>
                      {shindata.title}
                    </strong>
                    <p>
                      {shindata.description}
                    </p>

                  </ListItem>
                ))}
              </List>

            ) : (
                <p>No Results to Display</p>

              )}


            <Link to={"/view"}>
              <ScreenBtn>
                Screen View
		</ScreenBtn>
            </Link>

            <Link to={"/print"}>
              <PrintBtn>
                Print
		</PrintBtn>
            </Link>

            <EmailBtn>
              Send Email
	</EmailBtn>

            <TwBtn>
              Facebook
	</TwBtn >
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Admin;
