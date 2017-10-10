import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link, Route, Redirect} from 'react-router-dom';
import ProductList from './components/products/ProductList';
import { ListGroup, Col, Row, Grid, Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import Utils from './Utils';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],

        };
    }

    componentDidMount() {
        axios.get('http://demo.omnigon.com/pgatdemo1/mikeg/products.json')
            .then(response => this.setState({
                data: response.data.products
            }))
            .catch(err => console.log(err))
    }

    render() {
        let category = this.state.data.map(product => product.bsr_category);
        let uniqueCategory = Utils.findUniqueElement(category);

        return (
            <Grid>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">React-Bootstrap</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Link</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Row>
                    <Col sm={2} md={2} xs={2}>
                        <ListGroup>
                            <Link to={"/products/all"} className="list-group-item active">All</Link>
                            {uniqueCategory.map((category, index) => <Link to={"/products/" + category} key={index} className="list-group-item">{category}</Link>)}
                        </ListGroup>
                    </Col>

                    <Col md={10}>
                        <Route exact path="/" render={() => <Redirect to="/products/all"/>}/>
                        <Route path='/products/:level' render={({match}) => (
                            <ProductList match={match} data={this.state.data}/>
                        )}/>
                    </Col>

                </Row>
            </Grid>
        );
    }
}

export default App;


