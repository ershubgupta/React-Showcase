import React from 'react'
import { Toast } from 'react-bootstrap';

export function TaskCardPlaceholder() {
  return (
    <Toast style={{ opacity: "0.5"}} className="text-center">
      <Toast.Body
        className={`border-secondary`}
        style={{ borderTop: "3px solid" }}
      >
        <p className="my-3">Nothing to display</p>
      </Toast.Body>
    </Toast>
  );
}

export function TaskCardListPlaceholder() {
  return (
    <tr className="bg-light">
      <td colSpan="5" className="text-center py-3" style={{opacity: 0.5}}>
        Nothing to Display
      </td>
    </tr>
  );
}

