import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';

export class Cards extends Component {
  render() {
    return (
      <Col xs={'auto'} className='mb-3'>  
       <Toast className="py-2">
          <Toast.Header closeButton={false}>
            <img
              src={this.props.avatar_url}
              className="rounded mr-2"
              alt=''
              style={{maxWidth:'3rem'}}
            />
            <h5 className="mb-0">{this.props.name !== null ?  this.props.name: 'NA'}</h5>
          </Toast.Header>
          <Toast.Body className="pt-2 pb-0"><strong>Username:</strong> {this.props.login !== null ?  this.props.login : 'NA'}</Toast.Body> 
          <Toast.Body className="pt-2 pb-0"><strong>Joined:</strong> {this.props.created_at !== '' ?  this.props.created_at.slice(0,10): 'NA'}</Toast.Body> 
          <Toast.Body className="pt-2 pb-0"><strong>Company:</strong> {this.props.company !== null ?  this.props.company: 'NA'}</Toast.Body> 
          <Toast.Body className="pt-2 pb-0"><strong>Follower:</strong> {this.props.followers !== 0 ?  this.props.followers: 'NA'}</Toast.Body> 
          <Toast.Body className="pt-2 pb-0"><strong>Following:</strong> {this.props.following !== 0 ?  this.props.following: 'NA'}</Toast.Body>
          {this.props.html_url !== '' ? <Toast.Body className="pt-1 pb-0 mt-3"><a href={this.props.html_url} target='blank'>Public Profile</a></Toast.Body> : ''}
        </Toast>    
      </Col>
    )
  }
}

export default Cards
