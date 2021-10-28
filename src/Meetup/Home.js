import { Col, Container, Row } from "react-bootstrap";
import './Style.scss'
import {Switch, Route, Link} from "react-router-dom";

import RegistrationForm from './Pages/RegistrationForm';
import Dashboard from './Pages/Dashboard';
import Reports from './Pages/Reports';

function App() {
  return (
    <div className="meetup">
      <Row className="justify-content-end mb-4">
        <Col xs="auto">
          <Link to = "/meetup"
          className = "nav-link" >
            MeetUp
          </Link>
        </Col>
        <Col xs="auto">
          <Link to = "/meetup/dashboard"
          className = "nav-link" >
            Dashboard
          </Link>
        </Col>
        <Col xs="auto">
          <Link to = "/meetup/reports"
          className = "nav-link" >
              Reports
          </Link>
        </Col>
      </Row>
      <Switch>
        < Route exact path = "/meetup"
        component = {
          RegistrationForm
        }
        />
        < Route path = "/meetup/dashboard"
        component = {
          Dashboard
        }
        />                
        < Route path = "/meetup/reports"
        component = {
          Reports
        }
        />
      </Switch>
    </div>
  );
}

export default App;
