import React, { Component } from 'react'

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import axios from 'axios';

export class SearchForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       isAlert: false,
    }
  }
  
  handleChange = (e) => {
    this.setState({username: e.target.value });
  }

  handlSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.username.trim().length)
    let len = this.state.username.trim().length
    if (len !== 0) {
      await axios.get(`https://api.github.com/users/${this.state.username}`)
        .then(resp => {
          this.props.addUser(resp.data);
          this.setState({username: '', isAlert: false});
          // console.log(resp.data)
        })
        .catch(error => {
          this.setState({isAlert: true });
        });
    }
  }
  render() {
    return (
      <Form onSubmit={this.handlSubmit} className="mt-5 mb-4">
        <Row className="align-items-center">
          <Col>
            <InputGroup>
              <FormControl 
                id="inlineFormInputGroup" 
                placeholder="Search by Username" 
                value = {this.state.username}
                onChange = {this.handleChange}
              />
            </InputGroup>
             
          </Col>
          <Col xs="auto">
            <Button type="submit">
              Submit
            </Button>
          </Col>          
        </Row>
        <Row>
          <Col>
            <Form.Text muted className="text-left">Try by typing these usernames: gaearon, sophiebits, sebmarkbage, bvaughn or may be your's</Form.Text>
          </Col>
        </Row>
        {this.state.isAlert ? 
          <Alert variant="danger" className="mt-3" onClose={() => {this.setState({isAlert: false, errorMsg:''})}} dismissible>
             Currently, <strong>{this.state.username}</strong> is not available in GitHub database. Please check the username again.
          </Alert>        
        : ''}
      </Form>
    )
  }
}

export default SearchForm
