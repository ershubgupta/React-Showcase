import {Switch, Route} from "react-router-dom";

import Header from "./Header"
import Home from "./Home"
import Github from './GithubShowcase/Github';
import ShoppingCart from './ShoppingCart/Home';
import ToDo from './ToDo/Todo';
import { Col, Container, Row } from "react-bootstrap";
import ProductDetail from "./ShoppingCart/ProductDetail";

function App() {
  return (
    <div className="App">
      < Header/>
        <Container>
          <Row>
            <Col xs={12} className="my-4">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/github-cards" component={Github}/>
                <Route exact path="/shopping-cart/products/:id" component={ProductDetail}/>
                <Route exact path="/shopping-cart" component={ShoppingCart}/>
                <Route path="/todo-app" component={ToDo}/>
              </Switch>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
