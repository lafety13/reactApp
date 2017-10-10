import React, {Component} from 'react';
import { Button, Thumbnail, Col, Row, Grid } from 'react-bootstrap';
import {Panel} from 'react-bootstrap'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        let product = this.props.product;
        const header = <a href={product.link}> {product.name}</a>;
        return (
            <Panel header={header}>
                <Thumbnail src={product.img} alt={product.name}>
                     <Button onClick={ ()=> this.setState({ open: !this.state.open })} bsStyle="default">
                         Additional information
                     </Button>
                     <Panel collapsible expanded={this.state.open}>
                         <span>Asin: {product.asin}</span><br/>
                        <span>Category: {product.bsr_category}</span>
                     </Panel>
                     <p>Price: {product.price}</p>
                     <p>
                        <Button href={product.link} bsStyle="primary">Button</Button>
                     </p>
                 </Thumbnail>
            </Panel>
        );
    }
}

export default Product