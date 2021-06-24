import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

function ExistingUser(props) {
  const [msg, currmsg] = useState(false)
  return (
    <>
      {props.isUser ? 
        <Toast delay={3000} autohide onClose={() => currmsg(false)} style={{position:'fixed', bottom: '20px', right:'0'}}>
          <Toast.Header closeButton={false}><strong>User is already listed.</strong></Toast.Header> 
        </Toast> 
      :''}
    </>
  )
}

export default ExistingUser
