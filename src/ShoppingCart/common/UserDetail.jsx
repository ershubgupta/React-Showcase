import React from 'react'

export default function UserDetail(props) {
  const userDetials = props.userDetials;
  return (
    <>
      <div>
        <h6 className="d-inline-block">Name</h6>: {userDetials.name}
      </div>
      <div>
        <h6 className="d-inline-block">Email</h6>: {userDetials.email}
      </div>
      <div>
        <h6 className="d-inline-block">Phone</h6>: {userDetials.phone}
      </div>
      <div>
        <h6 className="d-inline-block">Address:</h6> {userDetials.address}
      </div>
    </>
  );
}
