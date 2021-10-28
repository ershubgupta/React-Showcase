import {Switch, Route} from "react-router-dom";

import Header from "./common/Header"
import Home from "./Home"
import Github from './GithubShowcase/Github';
import ShoppingCart from './ShoppingCart/Home';
import ToDo from './ToDo/Todo';
import SuperHero from './SuperHeroGame/Game'
import Meetup from './Meetup/Home'
import { Col, Container, Row } from "react-bootstrap";
// import ProductDetail from "./ShoppingCart/ProductDetail";
import Footer from "./common/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Container className="min-vh-100">
          <Row>
            <Col xs={12} className="my-4">
              <Switch>
                <Route exact path="/" component={Home}/>
                < Route path = "/github-cards📇"
                component = {
                  Github
                }
                />                
                < Route path = "/shopping-cart🛒"
                component = {
                  ShoppingCart
                }
                />
                < Route path = "/todo-app📋"
                component = {
                  ToDo
                }
                />
                < Route path = "/meetup"
                component = {
                  Meetup
                }
                />
              </Switch>
            </Col>
          </Row>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;
