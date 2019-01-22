
import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { FinalList, FinalListItem, } from "../components/FinalList";
import Footer from "../components/Footer";

class Admin extends Component {
  state = {
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.description) {
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
        <Row>
   
        <Col size="md-12">
      
            {this.state.shinbay.length ? (
              <FinalList>
                {this.state.shinbay.map(shindata => (
                  <FinalListItem key={shindata._id}>
                
                      <strong>
                        {shindata.title} 
                      </strong>
                      <p>
                      {shindata.description}
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

export default Admin;


{/* <Link to="/">← Back to descriptions</Link> */}