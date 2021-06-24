import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardList from './CardList';
import SearchForm from './SearchForm';
import ExistingUser from './ExistingUser';

export class Github extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       profiles: [],
       listedUser: false
    }
  }
  addUser = (userProfile) => {
    // dont add the user in the list if its already present
    if (this.state.profiles.some(el => el.login === userProfile.login)) {
      this.setState({listedUser: true})
    } else { 
      this.setState(prevState => ({
        profiles: [...prevState.profiles, userProfile],
        listedUser: false
      }));
    }
    
  }
  
  render() {
    return (
      <Container className="my-4">
        <Row>
          <Col xs={12} className="text-center">
            <h2 className="mb-3">Github User's profile</h2>
            <h4>You can preview User's profile and there basic detials by typing there username</h4>
            <SearchForm addUser = {this.addUser}/>
          </Col>
          <CardList profiles = {this.state.profiles}/>  
          <ExistingUser isUser = {this.state.listedUser} />        
        </Row>
      </Container>
    )
  }
}

export default Github
